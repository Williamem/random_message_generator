let today;
let tomorrow;
//calculate what day it is today
switch (new Date().getDay()) {
  case 0:
    today = "Sunday";
    break;
  case 1:
    today = "Monday";
    break;
  case 2:
    today = "Tuesday";
    break;
  case 3:
    today = "Wednesday";
    break;
  case 4:
    today = "Thursday";
    break;
  case 5:
    today = "Friday";
    break;
  case 6:
    today = "Saturday";
    break;
}
//calculate what day it is tomorrow
switch (new Date().getDay()) {
  case 6:
    tomorrow = "Sunday";
    break;
  case 0:
    tomorrow = "Monday";
    break;
  case 1:
    tomorrow = "Tuesday";
    break;
  case 2:
    tomorrow = "Wednesday";
    break;
  case 3:
    tomorrow = "Thursday";
    break;
  case 4:
    tomorrow = "Friday";
    break;
  case 5:
    tomorrow = "Saturday";
    break;
}
// messages to make up the horoscope
const messageArrOne = [
    `${today}’s skirmish between the Pisces moon and Venus in your ambition corner could land you in a power struggle if you’re not careful. Is someone trying to remind you of your place in the pecking order? Listing their accomplishments to make you feel like a newbie? It takes two to play that game, so ignore the grandstanding. Your work can shine on its own without embellishment—and you might score a mentor who appreciates your lack of pretention!`,
    `Teamwork is your jam, but it could be practically impossible to onboard people under ${today}’s moon-Venus duel. No matter how much you downsize your plan, you might feel like you’re herding cats. One member of the group could be a loose cannon. Or maybe a few people are playing politics and spoiling the atmosphere from the top down. If you’re at an impasse, tap into your Aquarian independence and shoot off in your own direction.`,
    `Straight talk is essential on ${today} when the moon in your communication sector drifts into a tense square with Venus in your subliminal zone. Don’t count on people being able to read between the lines. Spell it out if you want your message delivered clearly. And if you detect a salty tone or double entendre from someone, say so. Addressing it in the moment can prevent it from becoming a bigger deal.`,
    `With a moody Pisces moon challenging Venus in Sagittarius on ${today}, you may want to make waves standing up for what you believe in—but don’t do it! You’re liable to lose momentum halfway through your impassioned diatribe. To keep an even keel, up your self-care game with at-home spa treatments. THIS is the day you set aside all those lotions and potions for! You can get back on your figurative soapbox next week.`,
    `Today’s friction-filled square between the moon and Venus could get your blood pressure up. If you’re not mindful, your emotions can go from simmer to boil in a heartbeat. Look for healthy outlets for all that heat before you rock the boat in a relationship. Whether you’re under pressure at work or worried about finances, a day of fun will bring some relief. Dream up a cheap and cheerful activity to take your mind off your troubles.`,
    `Ouch! You’re known for your sensitivity, but ${today}’s moon-Venus skirmish hints that you’re the one doling out hurtful criticism. Zip it before you wound anyone unintentionally, even if your opinions sound helpful in your head. If someone wants your two cents, they’ll ask. If you’re sure that what you have to say will be of use, look for a positive way to spin it and give out plenty of props. Don’t butter people up in a phony way, but do empower them.`,
    `There’s more than one side to ${today}’s story, Libra. With the mystifying Pisces moon battling Venus, it’s hard to tell which way is up. Double check everything you’re going to say before you blurt out an opinion masquerading as fact. You also might give the rose-colored glasses treatment to a person during this transit. If they seem too good to be true, maybe they are. Being swept off your feet is a rush, but slow the tempo just in case.`,
    `You’ve got goals on the brain, thanks to the moon’s motivating presence in your achievement house. But la luna’s squabble with Venus on ${today} spells trouble, in the form of a person with their own agenda. Should you take your eye off the ball and appease them? Or stick to your guns and risk a tantrum? Try giving them a sliver of your attention, then get back to conquering the world.`,
    `Don’t let people walk all over you when the moon spars with Venus on ${today}. They can pull out the violins and tell all the sob stories they want. You still need to put up firm boundaries to signal you mean business. If you absolutely must get involved, be a cheerleader, not an enabler. Having a plan for the day will strengthen your resolve. So set an agenda and don’t waver.`,
    `Do yourself a favor on ${today} and avoid comparing yourself to others. The moon and Venus are jousting in your social and sharing corners, luring you into the trap of coveting thy neighbor. You could be heading for some serious drama unless you focus on what YOU have going for you. But don’t flaunt your own blessings, or you could provoke someone else’s envy and snark.`,
    `Why so grouchy, Lion? The moon’s battle with Venus on ${today} could put you in a prickly mood. But the emotions underlying your current state might date back further than this minor planetary tiff. Rather than stuffing uneasy feelings deeper down inside you, share them with your inner circle over lunch. Chances are they’ll have wise insights that can pull you out of your funk. Feeling neglected? Ask for what you need instead of making a scene to get a reaction.`,
    `Lighten up on the tough love, Ram. The moon’s spat with Venus in opinionated Sagittarius tempts you to deliver a harsh “truth” on ${today}. Stop and imagine how the other person will feel when they hear your well-intended—but unsolicited—advice. Sugarcoat your message with empathy, or don’t deliver it at all. And if you’re the recipient of a smug sermon, smile politely and make your way to the nearest exit.`,
  ];
  const messageArrTwo = [
    `You’re hesitant to confide in just anyone on ${tomorrow} when the egoistic Sun in your intimacy sector clashes with controlling Pluto. Maybe you’re wondering if you should make yourself vulnerable in a new friendship or romance. Is this about the other person, your private fears or a little of both? Get to the bottom of your reluctance so you understand why you’re not ready to trust.`,
    `Your restlessness could take over on ${tomorrow} when the Sun in your ninth house of exploration becomes entangled with turbulent Pluto in your twelfth house of the subconscious. If it seems like the grass is greener outside of this job, this relationship or some other sitch you’re in, peel back the layers of emotion under your FOMO. What are you running away from? Get some answers before you burn any bridges.`,
    `On ${tomorrow}, the Sun in your ambitious tenth house gets into a conflict with overbearing Pluto. You won’t take kindly to being talked down to (does anyone?), but hearing someone out could enable you to walk away with a valuable piece of advice. That doesn’t mean playing doormat to a bully. It means concentrating on the content without getting bent out of shape over any power imbalance.`,
    `A shortage of big ideas won’t be a problem on ${tomorrow}, thanks to the energizing Sun in your eleventh house of ideals. But dominant Pluto in your second house of brass tacks is dimming el Sol’s light, compelling you to transform a pipe dream into a detailed, workable plan. You can still be excited about the future you envision while filling in blanks like budget and timeframe. That’s how you turn fantasy into reality!`,
    `When the Sun in your subliminal realm does battle with your ruler, Pluto, on ${tomorrow}, you may be ready go to war yourself. No one likes being betrayed, but when a Scorpio suspects they’ve been stabbed in the back, IT’S ON. If you do sense a storm coming with a relative, coworker or friend, of course you’re going to dig until you know what’s really going on. Hopefully you’re wrong. But if you’re not, face the conflict head-on.`,
    `As the Sun fends off Pluto on ${tomorrow}, a relationship problem could bring on a dark mood. If you can avoid taking it personally, you’ll be able to see this situation from an objective angle and save yourself some tears. People get busy, but that doesn’t mean they don’t care. You could always check in to see how they’re doing. Maybe they need your support and will be thrilled that you reached out.`,
    `Whip out your diplomatic skills on ${tomorrow} to avert a standoff. The Sun in Libra is going up against domineering Pluto, activating your take-charge side. Don’t provoke people if your own pent-up anger is the core issue. Play peacemaker with yourself for a change rather than placating everyone around you. Owning up to how you’re feeling will defuse the tension.`,
    `On ${tomorrow}, you just want to have a good time, but due to a Sun-Pluto dustup, someone clingy might stand in your way. Avoid getting drawn into their clutches. What you need now is a day of mindless fun in a drama-free zone—so do your best to pull that off!`,
    `Your willpower might go straight out the window on ${tomorrow} when the Sun and Pluto lock horns. If you get sweettalked into doing a spontaneous, time-consuming favor or you’re about to blow off your punch list to binge-watch Squid Game, find the middle ground between regimented routine and escapist pleasure. All work and no play is not the answer, even for you, conscientious Virgo.`,
    `On ${tomorrow}, you might get pulled off the righteous path you’re trying to stay on when the Sun squares off with shadowy Pluto. Instead of willing yourself to “be good,” ask yourself why you’re choosing between two extremes. Don’t put yourself in a situation that’s practically designed to push you off the wagon; do address the problem you’re trying to avoid.`,
    `Steer clear of gossip on ${tomorrow} when the Sun in your chatty third house duels with stormy Pluto. It doesn’t matter how scandalous your intel is. Lock it in the vault. Play on your own pride if you have to: Spreading rumors doesn’t reflect well on you! Besides, you have more interesting things to do today. Get to it.`,
    `When the Sun in Libra throws down with stormy Pluto on ${tomorrow}, you could spot an obstacle on the brink of going all in on a relationship. Are there unresolved issues you need to deal with before you take the next step? Small stuff like divvying up chores around the house and larger matters like your financial styles are all up for discussion. Don’t put this off. You’ll be glad you got it out of the way.`,
  ];

//factory to add the months and amout of days into months object
const month = (days) => {
  return {
    days,
  };
};
//object containing the months and maximum number of days in each month
const months = {
  January: month(31),
  February: month(29),
  March: month(31),
  April: month(30),
  May: month(31),
  June: month(30),
  July: month(31),
  August: month(31),
  September: month(30),
  October: month(31),
  November: month(30),
  December: month(31),
};

//calculates your starsign based on information given
const calculateStarsign = (dd, mm) => {
    //declare the starsign variable for use later
    let starsign = 'starsign has not changed';
  //checks that the input is in the correct format (dd, mm) with exactly two numbers for each
  if (
    dd.length > 2 ||
    mm.length > 2 ||
    mm.length < 2 ||
    dd.length < 2 ||
    typeof mm != "number" ||
    typeof dd != "number" ||
    mm > 12 ||
    mm < 0
  ) {
    console.log(
      'Incorrect date format. Dates should be written as "dd, mm", e.g. January 15th would be "15, 01"'
    );
    return;
  }
  //switch statement to change the number of the month to name for comparison with months object
  switch (mm) {
    case 01:
      mm = "January";
      break;
    case 02:
      mm = "February";
      break;
    case 03:
      mm = "March";
      break;
    case 04:
      mm = "April";
      break;
    case 05:
      mm = "May";
      break;
    case 06:
      mm = "June";
      break;
    case 07:
      mm = "July";
      break;
    case 08:
      mm = "August";
      break;
    case 09:
      mm = "September";
      break;
    case 10:
      mm = "October";
      break;
    case 11:
      mm = "November";
      break;
    case 12:
      mm = "December";
      break;
    default:
      console.log(
        "If this message can be seen it means that an incorrect month made it past the if statement."
      );
  }
  if (dd > months[mm].days || dd < 0) {
      console.log(`${mm} does not have ${dd} days`)
      return;
  }
  //do the actual calculation to find out starsign
  if((mm === 'March' && dd > 20) || (mm === 'April' && dd < 20)) {
    starsign = 'Aries';
  } else if ((mm === 'April' && dd > 19) || (mm === 'May' && dd < 21)) {
    starsign = 'Taurus';
} else if ((mm === 'May' && dd > 20) || (mm === 'June' && dd < 21)) {
    starsign = 'Gemini';
} else if ((mm === 'June' && dd > 20) || (mm === 'July' && dd < 23)) {
    starsign = 'Cancer';
} else if ((mm === 'July' && dd > 22) || (mm === 'August' && dd < 23)) {
    starsign = 'Leo';
} else if ((mm === 'August' && dd > 22) || (mm === 'September' && dd < 23)) {
    starsign = 'Virgo';
} else if ((mm === 'September' && dd > 22) || (mm === 'October' && dd < 23)) {
    starsign = 'Libra';
} else if ((mm === 'October' && dd > 22) || (mm === 'November' && dd < 22)) {
    starsign = 'Scorpio';
} else if ((mm === 'November' && dd > 21) || (mm === 'December' && dd < 22)) {
    starsign = 'Sagittarius';
} else if ((mm === 'December' && dd > 21) || (mm === 'January' && dd < 20)) {
    starsign = 'Capricorn';
} else if ((mm === 'January' && dd > 19) || (mm === 'February' && dd < 19)) {
    starsign = 'Aquarius';
} else if ((mm === 'February' && dd > 18) || (mm === 'March' && dd < 21)) {
    starsign = 'Pisces';
} else {
    starsign = 'The date entered is missing from the list'
}
  return starsign;
};

const generateMessage = () => {
    const randomIndex = arr => Math.floor(Math.random() * arr.length);
    let messageOne = messageArrOne[randomIndex(messageArrOne)];
    let messageTwo = messageArrTwo[randomIndex(messageArrTwo)];
    return messageOne + ' ' + messageTwo;
}

const generateHoroscope = (dd, mm) => {
    let starsign = calculateStarsign(dd, mm);
    let message = generateMessage();
    return `Your starsign is ${starsign} And your horoscope for today and tomorrow is: ${message}`;
}
console.log(generateHoroscope(dd, mm));
//console.log(calculateStarsign(299, 22));
