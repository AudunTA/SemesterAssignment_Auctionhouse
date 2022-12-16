# SemesterAssignment_Auctionhouse
# guide to run project

git clone [SSH]

npm install <br />
npm run build <br />
npm run watch <br />

open live-server <br />


## error handeling

### listing:

listing expired, you are unable to bid and get a message <br />
your listing makes you unable to bid.

### create listing:
title is required, else a message will show <br />
end date is required, else a message will show. additional the date has to be in the future date from today otherwhise you will get a message

### Create user / log in:
user must use stud.noroff.no email to registrer <br />
name is required. <br />
password must be longer 8 or longer.

### API
most api calls will result in a DOM element to tell the user the resposnse status and tell them something went wrong with the API request.



## testing:

### unit test:
run tests: npm test-unit

unit testing if token is required
unit testing if api gives status code of 200
