import {useEffect, useState} from 'react'
import {useDocumentOperation} from 'sanity'

export const SetAndPublishAction = (props) => {
  const {patch, publish} = useDocumentOperation(props.id, props.type)
  const [isPublishing, setIsPublishing] = useState(false)

  useEffect(() => {
    // if the isPublishing state was set to true and the draft has changed
    // to become `null` the document has been published
    if (isPublishing && !props.draft) {
      setIsPublishing(false)
    }
  }, [isPublishing, props.draft])

  return {
    disabled: publish.disabled,
    label: 'Publish',
    onHandle: () => {
      // This will update the button text
      setIsPublishing(true)

      // Set publishedAt to current date and time
      patch.execute(
        [
          {setIfMissing: {date: new Date().toISOString()}},
          {setIfMissing: {excerpt: props.draft.content.substring(0, 255)}},
        ],
        {}
      )

      // Perform the publish
      publish.execute()

      // Signal that the action is completed
      props.onComplete()
    },
  }
}
