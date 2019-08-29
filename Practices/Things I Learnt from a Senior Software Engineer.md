# Things I Learnt from a Senior Software Engineer

https://neilkakkar.com/things-I-learnt-from-a-senior-dev.html?fbclid=IwAR3-wZjmAE8FNgzSN9aS-fFXygr7lNPARxil8sXl7YMOekMdoZHUBZ96QNg

Writing Code
How to Name Stuff
"There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors. - Leon Bambrick"

Legacy Code and the Next Developer
"I can do a role-reversal here - think about the next person coming to my code - will they find it weird or not. Peer reviews solve this somewhat. This led me to the idea of context: Be aware of the context my team is working in."

Documentation and Code Comments
“The main value in software is not the code produced, but the knowledge accumulated by the people who produced it.” - Li"

"From what I’ve heard, documentation is something every team struggles with. Not just code documentation but processes around the code."

Becoming confident about deleting shit code
"From what I’ve heard, documentation is something every team struggles with. Not just code documentation but processes around the code."

Code Reviews
"It’s an external feedback loop on how you’d write code vs how they write it. "
"Don’t approve code till I understand how it works."

Testing
"I think of testing as documentation. It’s documentation for my assumptions about the code. Tests tell me how I (or the person before me) expect the code to work, and where all they expect things to go wrong.

So, when I write tests now, I write with this in mind:

Show how to use the class/function/system I’m testing.
Show what all I think can go wrong.
A corollary of the above is that in most cases, I’m testing the behaviour, not the implementation. 

The things I miss in #2 is where the bugs come from."

"So, whenever I spot a bug, I make sure that the code-fix has a corresponding test (called regression testing) to document the information: This is another way things can go wrong.5

However, just writing these tests doesn’t improve my code quality, writing the code does. But the insights I gain from reading the tests help me write better code.

That’s the big picture of testing.

But, that’s not the only kind of testing to do. This is where deployment environments come in.

You may have perfect unit tests, but if you don’t have system tests, something like this happens:"

"This holds true for well tested code too: If you don’t have the libraries you need on your machines, you’ll crash and burn.

There’s the machines you develop on (source of all “It works on my machine!” memes).

There’s the machines you test on (might be the same as the ones you develop on).

Finally, there’s the machines you deploy on (please don’t let this be the same as the machines you develop on)"

"We have local development, which is in docker - on my machine.

We have a dev environment, where machines have a set of libraries (and dev tools) installed and we install the code we write on these. All testing with other dependant systems can take place here.

Then comes the beta / stage environment, which is exactly like the production environment.

Finally, the prod or production environment, which are the machines on which the code runs and serves actual customers.

The idea is to try and catch errors that unit and system testing wouldn’t. For example, an API mismatch between requesting and responding system."

Design
"There’s so much to think about when designing a system.

What’s the usage numbers?
How many users exist? and what’s the expected growth? (This will translate into how many db rows)
What might be the future pitfalls?

I need to convert this into a proper checklist titled “Gathering Requirements.”"

"How will local development work?
How will we package and deploy?
How will we do end-to-end testing?
How will we stress-test this new service?
How will we manage secrets?
CI/CD integration?"

" I got to design local development, learn about DPKGs (packaging and deployment), and wrestled with secret deployment.

Who thought deploying secrets to production can get that tricky?

You can’t put them in code, as then anyone can see them.
Put them as an env variable, like the 12 factor app suggests? It’s a good idea. How do you put them there? (Accessing PROD machines to populate env variables everytime the machine starts is a pain)
Deploy as a secrets file? Where does the file come from? How is it populated?
We don’t want things to be manual.

In the end, we went with a database with role access control (only our machines and us can talk to the database). Our code gets the secrets from this database on startup. This replicates very well across dev, beta and prod - with secrets in the respective databases.

Again, this can be very different with a cloud provider like AWS. You don’t have to think much about secrets. Get your role account, input secrets in the UI, and your code shall find them when it needs them. It’s pretty cool how much it simplifies things - but I’m glad to have the experience to appreciate the simplicity."

Desigining with Maintenance in Mind
"First part is not deprecating old stuff, always adding more. A bias towards addition instead of deletion. (Reminds you of someone?)

The second part is designing with an end goal in mind. A system that evolves to do things it wasn’t supposed to do necessarily doesn’t work as well as a system designed from scratch to do the same thing. This is the taking-a-step-back approach instead of hacking away with agility.

I now know of atleast three ways to reduce rate of degradation.

Keep the business logic and the infrastructure separate: It’s usually the infrastructure that degrades - usage increases, frameworks become obsolete, zero-day vulnerabilities show up, etc.
Building processes around maintenance. Apply the same updates to new bits and old bits. This prevents diff between new and old, and keeps the entire code “modern”.
Ensure you keep pruning all your unwanted/old stuff."

Deploying
Would I rather bundle features together or deploy them one by one?

Depending on the current processes in place, if the answer is to bundle features together, there’s a problem.

The question to ask then is why do you want to bundle features together?

Does the deployment take too much time?
Do the code reviews not happen easily?
Whatever is the reason, that’s the bottleneck to fix.

I know atleast two issues with bundling.

You’re self blocking one feature if bugs in the other.
You’re going anti-derisking, or increasing risk of things going wrong.
Then, whatever deployment process you choose, you always want your machines to be like cattle, not like pets. They aren’t precious. You know exactly what’s running on every machine, and how to recreate them in case of death. You’re not upset when one machine dies, you just spin up a new one. You herd them, not raise them.

When Things Go Wrong
"For when things go wrong, and they will, the golden rule is minimizing client impact.

My natural tendency when things went wrong were to fix the problems. Turns out, it’s not the most optimal solution.

Instead of fixing what went wrong, even if it’s a “one line change”, the first thing to do is rollback. Go back to the previous working state. This is the quickest way to get clients back on a working version.

Only then should I look at what went wrong and fix those bugs.

Same idea with a “borked” machine in your cluster - put it down, mark it unavailable, before trying to figure out what’s wrong with the machine."

"Since then, my heuristic has been to do a breadth-first search before a depth-first search, to get rid of the top level nodes. What can I confirm using current resources?

Is the machine up?
Is the right code installed?
Is the config in place?
< Code specific configuration >, like is the routing in the code correct?
Is the schema version correct?
Then, get into the code."

Monitoring
I think three components make up monitoring - logging, metrics, and alarms.

You figure out things you might need to monitor, you log those, you run your system. Over time, you find a few bugs you don’t have enough information to solve. Those are good times to enhance logging - what’s your code missing?

I think you intuitively figure out what things will be important to log. There was a lot of difference between the kind of things him (the senior SWE) and I were logging in our service. I figured just the request-response logs would suffice, while he had lots of metrics like query execution time, some specific internal calls made by the code, and also when to rotate logs, all sorted out.

It’s virtually impossible to debug things without logs - if you don’t know the state the system was in, how do you even go about recreating it?

Metrics can be derived from logs, or a separate standalone in the code. (Like sending events to AWS CloudWatch and Grafana). You decide your metrics and send the numbers in as the code runs.

Alarms are the glue putting everything together in a great monitoring system. If one metric is the number of machines currently running in production, when this number falls to 50% is a great alarm to have - you know something went wrong.

This hints at another habit to develop. When you fix bugs, you aren’t just focusing on how to fix the bug, but also, why didn’t you figure it out earlier? Was there alarming in place? How can you monitor better to prevent similar problems?
