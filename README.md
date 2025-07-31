# Reap Challenge

## 1️⃣ Frontend Validation

### Login Page
<img width="1894" height="832" alt="400BadRequest" src="https://github.com/user-attachments/assets/4768a8ba-1b02-417a-9eac-6b470587cfe4" />
My first validation was to try to understand which errors the API returned with an incorrect password, and I got a Bad Request. In my opinion, the most appropriate error name should be an Authentication error, with the aim of having a more concise explanation.

<img width="1892" height="841" alt="400BadRequestAndUnauth" src="https://github.com/user-attachments/assets/55794878-9785-45d4-96ed-a5bf69267edb" />
At another time, I received this unauthorized error from a different API, not the one that responded with Bad Request. I found it confusing. I didn’t understand the meaning of this, and if I were part of the project, I would want to investigate it further.

### Sign-Up Page

<img width="1901" height="850" alt="SignUp" src="https://github.com/user-attachments/assets/d8154774-ac6d-4716-8f3e-3c48e421b239" />
At first, it worked as expected. No API errors and the screen displayed what was expected.

<img width="710" height="709" alt="WithoutEmail" src="https://github.com/user-attachments/assets/9fb7eaff-4de1-4217-ba43-56bb8f0f746b" />

But I didn't receive any email. 
I tried this with other temporary email sites and got the same flow. It could be an issue with the other sites.


## 2️⃣ Backend Validation

<img width="1474" height="723" alt="201" src="https://github.com/user-attachments/assets/8d255aa0-82de-4b01-a409-7e0d9457f412" />
Working as expected.

<img width="1494" height="743" alt="400-WithoutPassword" src="https://github.com/user-attachments/assets/46cf507d-1a5c-4e02-b4db-cefd81e38b78" />
Without password.

<img width="1464" height="557" alt="400-WithoutFillingPasswordRequirement" src="https://github.com/user-attachments/assets/9862cba9-e4df-4b32-b4f2-d1c8fc2d25b3" />
Without requirement of password.

<img width="1484" height="627" alt="400-WithoutLogin" src="https://github.com/user-attachments/assets/ebb6c606-8195-4999-bc98-7ea98051f04c" />
With empty login.




