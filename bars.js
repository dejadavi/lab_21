var quote={};

quote.quotes=["This is not album of the year. This is album of the life.",
"This is not album of the year. This is album of the life.",
"When you’re the absolute best, you get hated on the most.",
"Visiting my mind is like visiting the Hermès factory. Sh*t is real.",
"I am God's vessel. But my greatest pain in life is that I will never be able to see myself perform live.",
"I don't even listen to rap. My apartment is too nice to listen to rap in.",
"I have this table in my new house. It was some weird nouveau-riche marble table, and I hated it. We would try to set up different things around it, but it never really worked. I realised that table was my ego. No matter what you put around it, under it, no matter who photographed it, the douchebaggery would always come through.",
"I feel like I’m too busy writing history to read it.",
"I think what Kanye West is going to mean is something similar to what Steve Jobs means. I am undoubtedly, you know, Steve of internet, downtown, fashion, culture. Period. By a long jump.", 
"Michelle Obama cannot Instagram a pic like what my girl Instagrammed the other day.",
"I'm a pop enigma. I live and breathe every element in life. I rock a bespoke suit and I go to Harold's for fried chicken. I'm all these things at once, because, as a taste maker, I find the best of everything.",
"One of my biggest achilles heels has been my ego. And if I, Kanye West, can remove my ego, I think there’s hope for everyone.",
"Clothing should be like food. There should never be a $5000 sweater. You know what should cost $5000? A car should be $5000. I was 14 and middle class. I know what it felt like to not get what I have. This coming from the man who sold a plain white t-shirt for $120?",
"I dom't call myself a designer as I was not allowed to go to Saint Marten's because I was too famous by the time I realised I wanted to design. Fame is often looked down upon in the design world.",
"I have millions of ideas and I represent a new generation just trying to express themselves in a broken world. I will go down as the voice of this generation, of this decade. I am so credible and so influential and so relevant that I will change thing.",
"I hate when I'm on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle.",
"Sometimes people write novels and they just be so wordy and so self-absorbed. I am not a fan of books. I would never want a book's autograph. I am a proud non-reader of books.",
"You should only believe about 90 percent of what I say. As a matter of fact, don’t even believe anything that I’m saying at all. I could be completely messing with you, and the world, the entire time.",
"I will die for the art! For what I believe in. And the art ain’t always gonna be polite! Ya’ll might be thinking right now, ’Did he smoke something before he came out here?’ The answer is yes, I rolled up a little something. I knocked the edge off.",
"I remember always going back to the fashion shows, not because I wanted to be seen in some really expensive rapper jacket that I’d just bought. It was because I cared so much about seeing artists express themselves to the maximum.",
"The [Adidas] contract said 25 SKUs, and the fashion show I was supposed to do a collection with 25 SKUs — I don’t know how that was supposed to happen. And the original talent budget was $500,000 — I don’t know how I was supposed to put a design team together for that, but luckily I’m a multi-millionaire rapper and I covered the rest of it.",
"People say I have a bad reputation. I think I’ve got the best reputation in the building." ,
"I have absolutely no plans for what .I'm going to say.",
"So it's cool to be up here with three people who I screamed at the most in the past year [...]. This could land completely wrong, but it doesn’t really f**king matter, does it? If you don’t like 10-minute profanity-ridden speeches that end with a presidential bid, you can go to the bathroom.",
"I just want to bring as much beauty to the world as possible. I'm only 38 years old.",
"You know my tour game is strong. My tour game is unprecedented. So we’re going to go out in September, I believe, and we’re just working on some of the ideas right now.",
"It’s not about Kanye West. It’s not about Taylor Swift. There’s a lot of people in America that feel like they don’t have the platform to stand up and express their closet racism. Before they had that platform, one really easy way to express it was to say, ‘Eff Kanye West'.",
"She broke boundaries with fashion where designers weren’t trying to make clothes with women with shape, and now they’re all about embracing and empowering women. [She's] empowering women in a matriarch society where women can make money. Like when she said, ‘OK my husband might have invested everything he had into fashion, everything he had into creativity for breaking boundaries, but I put the money in the account. All of those statements, means that can’t nobody ever disrespect my wife, period." ,
"It’s not about Kanye West. It’s not about Taylor Swift. There’s a lot of people in America that feel like they don’t have the platform to stand up and express their closet racism. Before they had that platform, one really easy way to express it was to say, ‘Eff Kanye West.." ];


quote.randomWord=function(wordList) {
    console.log("Getting Random word");
    return wordList[Math.floor(Math.random() * wordList.length)]

};





module.exports.quote=quote;