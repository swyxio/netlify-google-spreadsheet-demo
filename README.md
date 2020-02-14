# google netlify sheets demo

check https://netlify-google-spreadsheet-demo.netlify.com/

## to set this up for local dev

make sure to set env vars inside `functions/google-spreadsheet-fn/.env`:

```bash
TRY_TO=CUSTOMIZE_THIS
GOOGLE_SPREADSHEET_ID_FROM_URL= # e.g. 10abcu_reo5FctMpuiOYHJstj3lTit4pvp-VS7mZhgVw
GOOGLE_SERVICE_ACCOUNT_EMAIL= # e.g. googlenetlify-spreadsheet-test@foo-bar-123456.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY= # e.g. -----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG etc etc super long key
```

and then with the Netlify CLI you can run `netlify dev` and it opens up locally for you to develop.

## to set this up on your own in production on netlify

make sure to set the env vars in the netlify UI