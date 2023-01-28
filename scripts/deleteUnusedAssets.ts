// This script will find and delete all assets that are not
// referenced (in use) by other documents. Sometimes referred
// to as "orphaned" assets.
//
// Place this script somewhere and run it through
// `sanity exec <script-filename.js> --with-user-token`

/* eslint-disable no-console */
import { getCliClient } from "sanity/cli";

const query = `
  *[ _type in ["sanity.imageAsset", "sanity.fileAsset"] ]
  {_id, "refs": count(*[ references(^._id) ])}
  [ refs == 0 ]
  ._id
`;

const client = getCliClient({ apiVersion: "2021-10-21" });

client
  .fetch(query)
  .then((ids) => {
    if (!ids.length) {
      console.log("No assets to delete");
      return true;
    }

    console.log(`Deleting ${ids.length} assets`);
    return ids
      .reduce((trx, id) => trx.delete(id), client.transaction())
      .commit()
      .then(() => console.log("Done!"));
  })
  .catch((err) => {
    if (err.message.includes("Insufficient permissions")) {
      console.error(err.message);
      console.error("Did you forget to pass `--with-user-token`?");
    } else {
      console.error(err.stack);
    }
  });
