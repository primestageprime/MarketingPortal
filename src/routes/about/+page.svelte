<script>
  import { slide } from "svelte/transition";
</script>

<section transition:slide class="vertical-overflow">
  <section>
    <article>
      <h2>Founder's Statement</h2>
      <p>
        After 25 years of experience in various segments of the software development world, I
        realized that the existing model of providing custom software for companies has some
        inherent challenges. I've done everything from individual contribution where I built systems
        from the ground up by myself to managing teams of dozens of developers working on complex
        projects in parallel. Recently, I had occasion to stop and think about how I would do things
        differently if I were running my own company. I discussed with those that I trusted most,
        and we conceived of PrimeStage. Our core values center around trust, predictability, and
        dedication to providing the client with exactly what they want and need. By providing a
        place where developers feel ownership over their process, tools, and teams, we are able to
        achieve a level of consistency unseen in unseasoned teams. Through clear communication, we
        ensure that clients are comfortable with the development of their software at every stage.
        We take great pride in our work and in our dedication to making sure our clients get the
        experience possible. [Peter - Thoughtful]
      </p>
    </article>
  </section>

  <section>
    <h2>Problem Statement</h2>
    <p>
      Building and maintaining a software team is hard. It requires time to recruit and train
      developers. There's no guarantee that they'll work well together. Getting them to finish
      projects on time is like herding cats. They're very expensive. When we get to the end of a big
      project, we're faced with an uncomfortable choice of laying them off and losing the
      institutional knowledge or keeping them on without clear direction for what they should do.
      [GANTT Chart of common development]
    </p>
  </section>
  <section>
    <h2>Proposed Solutions:</h2>
    <article>
      <h3>Onshore Development Team</h3>
      <p>
        Elite cadre of Senior Developers that have already worked together for several years come to
        the project with processes and tools already in place. They listen to your goals and
        requirements, asking questions to clarify until they fully understand the nuance of your
        business. They iterate on designs to set a Minimal Viable Product that will satisfy you.
        They deliver on a predictable timeline with milestone demos. They deliver the work for a
        contracted price on time. When the project is delivered you decide whether to continue to a
        next iteration, pause and come back, or finish entirely. <strong>[RECOMMENDED]</strong>
        [Calendar of iterative development process]
      </p>
    </article>
    <article>
      <h3>Offshore</h3>
      <p>
        Initially less expensive and it can work for simple tasks, but with the time offset and
        occasional language barriers it's difficult to do R&D that way. For intense development we
        require a development team that can be engaged and responsive. Where we can come away from a
        planning meeting feeling understood and emerge from a demo feeling satisfied. [Calender of
        India vs US meeting overlap]
      </p>
    </article>
    <article>
      <h3>Boom and Bust</h3>
      <p>
        Hiring and then laying off developers is the worst of both worlds. We're not a
        software-focused business. We don't need a standing army of developers to make new features.
        Hiring, managing, and eventually firing a software development team is a distraction from
        our core goals. Additionally, we're in a hurry to get our software done, and we want an
        experienced team that will do a good job. [GANTT chart of money with highlighted
        productivity time]
      </p>
    </article>
    <article>
      <h3>Boot Camp/Incubator/Contractors</h3>
      <p>
        Getting a bunch of new developers is relatively cheap, and seems flexible. But the code that
        they put out doesn't scale well. It doesn't meet standards of QA that we need. The planning
        process is vague and frustrating. I never know when I'm going to get my projects delivered.
        [Rocket built out of duct tape and string]
      </p>
    </article>
  </section>
  <section>
    <h2>Strategy:</h2>
    <article>
      <h3>Align and Conquer</h3>
      <p>
        Choose a working strategy where the priorities of the client and those of the development
        contractors are perfectly aligned to encourage optimal performance with high quality. [Image
        of rockets pointed away from each other] vs [Image of rockets aligned]
      </p>
    </article>
  </section>
  <section class="info-section d-fr">
    <h2>Tactics:</h2>

    <article>
      <h3>Project Plan</h3>
      <p>
        We'll sit down with you to get a deep understanding of the software you need. We'll ask
        questions and listen to your answers. We have standard tools that can be customized to fit
        your needs. Considerations of User Experience, budget, timeline, scale, security, and
        training will all be considered and documented in the plan. [Checklist of empty Acceptance
        Criteria]
      </p>
    </article>

    <article>
      <h3>Product Design</h3>
      <p>
        We'll work with Designers that have have years of experience understanding complex web
        applications. We'll stay focused on the core product requirements that will deliver value to
        you most quickly. We can iterate from there, but we'll avoid feature bloat that makes many
        projects expand past their budget and deadlines. You'll end up with a high level roadmap and
        a near term concrete plan and schedule. The next iteration will have clear acceptance
        criteria. [illustration of figma layout for Alarms]
      </p>
    </article>

    <article>
      <h3>Development Iterations</h3>
      <p>
        We'll establish a schedule that fits your timeline and budget to deliver the first iteration
        of work. Each week we'll have a short demo that shows progress against the agreed upon
        milestones. If there are any material changes to the acceptance criteria that we discover
        along the way, we'll communicate it in a timely manner to give you an opportunity to weigh
        in. [Calender of planning/Focus Blocks/Demo]
      </p>
    </article>

    <article>
      <h3>Demo/Deploy</h3>
      <p>
        Demo will not come as a surprise to you. We'll demo all of the acceptance criteria to make
        sure that you're satisfied with what we've delivered. If there were any changes along the
        way, you'll have signed off of them. We'll demo in a staging environment and the code will
        be tested and working. When you approve the acceptance criteria, we'll deploy it to
        production on your timeline. [Completed checklist of Acceptance Criteria]
      </p>
    </article>

    <article>
      <h3>Bugs & New Features</h3>
      <p>
        We stand behind our products. We'll have two queues of feedback. Bugs (obvious breakage or
        regressions against the documented acceptance criteria) are fixed as part of the original
        contract cost. This aligns us because we are encouraged to use automated testing to defend
        against regressions. New features, enhancements, or changes to acceptance criteria are bid
        out as future iterations, so your cost remains predictable. [Guarantee of Quality seal]
      </p>
    </article>
  </section>

  <section>
    <h2>Pricing:</h2>

    <article>
      <h3>Sprint Work</h3>
      <p>
        When we make a plan, the cost will be expressed in sprints. Sprints cover the complexity of
        supporting and managing senior developers.
      </p>
      <p>We charge a flat rate of $10K/sprint which includes the cost of:</p>
      <ul>
        <li>Developer Salary/benefits</li>
        <li>Product Management</li>
        <li>Meetings</li>
        <li>Tools and Office Space</li>
        <li>Training/Onboarding/Insurance etc.</li>
      </ul>
      <p>
        We will determine the number of Sprints (cost) and calendar timing (deadline). PrimeStage
        will deliver the project to the acceptance criteria on time. If the project as designed ends
        up requiring more time than estimated, we will absorb the cost of that without expanding
        your expense.
      </p>
      <p>
        Support cost is negotiated based on the Service Level Agreement, the size and complexity of
        the system, and the the duration of the contract.
      </p>
      [Rocket with a no haggling price tag on it]
    </article>
  </section>
</section>

<style lang="scss">
  section.vertical-overflow {
    display: flex;
    align-items: center;
    grid-gap: 1rem;
    flex-direction: column;
  }
  section.vertical-overflow section {
    display: flex;
    grid-gap: 1rem;
    justify-content: flex-start;
    flex-direction: column;
    width: 60%;
    color: var(--color-text-secondary);
    padding: 16px;
  }
  article {
    display: flex;
    grid-gap: 1rem;
    justify-content: flex-start;
    flex-direction: column;
  }
  ul {
    padding: 0 1.3rem;
  }
</style>
