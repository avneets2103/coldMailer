# PERSONAL COLD MAILING SERVER
## What does it do?
This is a simple nodejs server that takes in the inputs and sends the mail using nodemailer.
You set your own cover letter template first during setup and headline and it sends the mail to the given email address without opening mail app and no changes to format, just a few inputs. You can also attach your resumes to the mail. You can make different routes for different roles and different cover letter templates. Its just a basic utility application.
If you have a list of emails and details, you can do them all at once, using a loop and an array of objects using minor tweeks to the code.

## This is the step by step guide to set up your own cold mailer server using nodemailer

### 1. Open terminal and clone this repository (Please leave a ⭐ too)
`
git clone https://github.com/avneets2103/coldMailer.git
`

### 2. Open the folder in your favorite code editor and open terminal.

### 3. Install the dependencies
`
npm i
`

### 4. Duplicate the .env.sample file and rename it to .env

### 5. Open the .env file and fill in the details like this:

```
PORT = 5000
MAIL_PASSWORD = "bajdcbaskjcdsaaasdcas"
MAIL_USER = johndoe@gmail.com
USER_NAME = john
```

> Note: 

>> You can choose any available port

>> You have to generate an app password for your google account, and use that password in the .env file as `MAIL_PASSWORD` and the same gmail account in `MAIL_USER`.

>> The USER_NAME is the name of the user who will be sending the mails, you can change it to your name

#### Confused how to get google app password? 
Go to your google account, go to security settings, make sure you have 2 factor authentication enabled, then search `app passwords` in the search box and generate a new app password, copy it and paste it in the .env file.
`Video reference:` https://www.youtube.com/watch?v=MkLX85XU5rU

### 6. Open the constants.js file
Over here you have to change your CoverLetter template according to your needs, and take these inputs just the way I am doing it.

Also replace my resume with your resume, and change the file path accordingly.
You can also change the headlines according to your needs.

```js
const cgpa = add gpa if you want to include cgpa in the cover letter;

export const MLCoverLetter = ( date, EName, companyName, companyAddress,specificPosition, foundWhere, aboutCompany) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cover Letter</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6;">
    <!-- Change as per your cv and take the inputs as per your needs -->
</body>
</html>
` 

export const DevCoverLetter = ( date, EName, companyName, companyAddress,specificPosition, foundWhere, aboutCompany) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cover Letter</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6;">
    <!-- Change as per your cv and take the inputs as per your needs -->
</body>
</html>
` 

export const MLResumePath = "your resume path"
export const DevResumePath = "your resume path"

export const MLHeadline = "your mail headline"
export const DevHeadline = "your mail headline"
```


### 7. Run the server using the terminal
`npm run dev`

### 8. Send the mail using the postman, these are post requests
Something like this
```json
{
    "recEmail":"yenseng.nvidia@gmail.com",
    "date":"13th June 2024",
    "EName":"Avneet Singh Bedi",
    "companyName":"NVIDIA",
    "companyAddress":"Banglore",
    "specificPosition": "SDE Role",
    "foundWhere":"Linkedin",
    "aboutCompany":"stonks"
}
```

> Note: I have also added the postman collection json for the same, so you can export it to postman and use it.

`THANK YOU FOR READING, PLS CLONE/FORK AND ⭐ THIS REPO, THANKS`
