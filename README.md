# netlify dev + google sheets api v4 demo

check https://netlify-google-spreadsheet-demo.netlify.com/

![googlesheets](https://user-images.githubusercontent.com/6764957/74577961-ecb51800-4f5f-11ea-9b81-30a5fcb6e68c.gif)


<details>
  <summary>
    
**How to get the env vars: tutorial to be fleshed out**

</summary>

1. make a google sheet. its id from url will be `GOOGLE_SPREADSHEET_ID_FROM_URL`

2. head to google console and make sure the Sheets API is enabled https://console.developers.google.com/apis/library/sheets.googleapis.com?project=sixth-storm-268221. you may need to set up a "project" for this if this is your first time.

![image](https://user-images.githubusercontent.com/6764957/74578095-9eecdf80-4f60-11ea-85b2-d75641292015.png)

3. get the service account key, NOT the API key. this might help: https://github.com/theoephraim/node-google-spreadsheet/blob/756d57fea3e1cf1d5ba6a38b12210102da0bf621/docs/getting-started/authentication.md. this will give you `GOOGLE_SERVICE_ACCOUNT_EMAIL` and `GOOGLE_PRIVATE_KEY` (see form below)

![image](https://user-images.githubusercontent.com/6764957/74578194-1f134500-4f61-11ea-9f4b-d85d6e6e6d46.png)


4. Make sure your sheet has granted permission https://stackoverflow.com/questions/38949318/google-sheets-api-returns-the-caller-does-not-have-permission-when-using-serve to `GOOGLE_SERVICE_ACCOUNT_EMAIL`

</details>

## to set this up for local dev

make sure to set env vars inside `functions/google-spreadsheet-fn/.env`:

```bash
TRY_TO=CUSTOMIZE_THIS
GOOGLE_SPREADSHEET_ID_FROM_URL= # e.g. 10abcu_reo5FctMpuiOYHJstj3lTit4pvp-VS7mZhgVw
GOOGLE_SERVICE_ACCOUNT_EMAIL= # e.g. googlenetlify-spreadsheet-test@foo-bar-123456.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY= # e.g. -----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG etc etc super long key
```

and then with the Netlify CLI you can run `ntl dev` ([Netlify Dev](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md)) and it opens up locally for you to develop.

## to set this up on your own in production on netlify

make sure to set the env vars in the netlify UI
