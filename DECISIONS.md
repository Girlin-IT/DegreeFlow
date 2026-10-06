# Decision Log

Keeping track of the main technical and scope decisions as I go, with the reasoning behind each one, so it's all traceable alongside the commits.

## Week 1 — Final research question
I Went through a few versions of this. Started with something around personal confusion over assignment tracking, then tried a technical debt/static analysis comparative study, but Andy wanted something build-focused rather than pure analysis. Landed on: "To what extent can a well-architected assignment-tracking and grade-weighting application improve students' workload visibility and reduce perceived academic stress?" Keeps it build-focused but still gives something to actually research and evaluate.

## Week 1 — Stack: JavaScript, Node, Express, MongoDB
Going with this because it's the same stack I'm using for GearTrack in Advanced Web, so I'm not learning a new language on top of everything else this year. Skills carry over between the two modules, which saves time I don't really have.

On MongoDB specifically over a SQL database: Degree Flow's data isn't heavily relational, a user has modules, a module has assignments, that's about as complex as it gets, so I don't need the strict table structure or joins SQL is built for. MongoDB stores data as JSON-like documents which fits naturally with a JavaScript/Node backend, and Mongoose still gives me schemas and validation on top, so I'm not giving up structure by avoiding SQL. The main driver though is honestly consistency across my modules rather than MongoDB being objectively better for this, worth being upfront about that if it comes up in the viva.

## Week 2 — Dropping AI from the dissertation
Jan raised some fair points about this when I mentioned the idea, digital poverty, cost, accuracy, what happens when it gets things wrong, privacy. All valid and not things I could properly address in the time I've got. Not scrapping the idea completely, just pushing it to after graduation as a personal project once I've actually thought through the ethics side properly.

## Week 2 — Web app only, not native mobile
Keeping scope realistic for the deadline. Native mobile is something I'd like to do eventually but not for this.

## Week 2 — Priority suggestions as a maybe, not a promise
Thought about adding something that suggests which assignments to prioritise based on weight and due date. Not putting this in the Proposal as a commitment, if I have time left over after the core features are solid I'll look at it, but I'm not banking on it.

## Week 3 (data modelling) — Module and Assignment as separate collections
If I nested assignments inside Module as a field it'd make the weighted average calculations messy and unreliable. Keeping them as separate collections means each module's average can be worked out properly.

## Week 3 (data modelling) — How assignment status works
Status is manual by default, you set it to in progress/submitted yourself. It auto-flips to overdue if the due date passes and nothing's been submitted, and once a grade gets entered it becomes graded regardless of what it said before. Means I don't have to remember to update it constantly and it still stays accurate.

## Week 3 (data modelling) — Weighted average formula
sum(grade × weight) ÷ sum(weight), only counting assignments that actually have a grade in. Updates live as grades come in. This is basically how real module weighting works so it should make sense to anyone looking at it.
