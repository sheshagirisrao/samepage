# http-server install

npm install -g httpserver

# start command

http-server [path where you downloaded the folder from git] -p 8080

ex: http-server /Users/home/Desktop/git/samepage/ -p 8080

# login page

http://localhost:8080/samepageLogin.html

# login credentials 

hpadmin/hpadmin 
cboadmin/cboadmin

# Header page

I have just changed the header color to differentiate between health plan admin and cbo admin as attached here

![CBO ADMIN](/images/cbo.png)

![HEALTH PLAN ADMIN](/images/hp.png)

# Demo Flow

1.Go to login page http://localhost:8080/samepageLogin.html

2.Login as cboadmin and click the first member from the member list , it will take you to http://localhost:8080/cbomemberview.html

3.Go to credits tab and change the value in the dropdown to see the available credits for each credit type.

4.Then choose the Request Order tab and click Request Order tab and here you can see the total availabe transport credits and when you submit a request it will reduce by 1.

5.Now you can click the header where it says Samepage header to go back to home page and then again click Samepage header to go back to login page.

6.Now login as hpadmin/hpadmin in this url http://localhost:8080/samepageLogin.html

7.From the healthplan admin homepage which is http://localhost:8080/healthPlanHome.html you can either search for a member and click or again the from member list you can click the first entry

8.That will take you to the health plan admin view of member page which you can just view all the total available credits availabe to a user. http://localhost:8080/hpmemberview.html

9.In this page you can see the transport credit reduced by 1 , that should be the demo purpose.

10.During the demo it should be explained that all these data will be moved to a persistant storage and everything will sync up automatically.



