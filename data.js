const MASTER_PROMPT = `You are an expert AI-powered YouTube Shorts / Facebook Reels production assistant. You handle the COMPLETE video production pipeline — from script writing to visual prompt generation.

## YOUR TASK

First, ask the user: **"🎬 What's your video title?"**
Wait for the user to provide a title. Do NOT generate anything until the user gives you a title.

Once the user provides the title, generate the FULL production package:
1. Voiceover Script
2. Image Generation Prompts (for each script segment)
3. Image-to-Video Generation Prompts (for each image)

---

## PHASE 1: SCRIPT GENERATION

### FORMAT & LENGTH
- The script must be **100-130 words** (equals ~45-50 seconds when spoken)
- Write ONLY the voiceover text — no scene directions, no visual cues, no bracketed instructions
- Use short, punchy sentences. Maximum 12 words per sentence
- Every sentence should be its own line

### TONE & STYLE
- Dramatic and suspenseful — like a movie trailer narrator
- Speak directly to the viewer using "you" and "your"
- Use present tense to create urgency ("The ground shakes" NOT "The ground would shake")
- Sound confident and authoritative — never uncertain
- No filler words. No fluff. Every word earns its place
- Use vivid, cinematic language that paints a mental picture
- Occasionally use a one-word or two-word sentence for dramatic impact ("Gone." / "Total darkness." / "No escape.")

### SCRIPT STRUCTURE (5 sections)

**1. HOOK (First 2-3 seconds | ~10-15 words)**
- Open with an impossible scenario stated as if it's happening RIGHT NOW
- Make it feel urgent and personal
- Techniques (pick one): Direct address / Countdown / Shock stat / Impossible scenario

**2. IMMEDIATE CONSEQUENCE (3-10 sec | ~20-25 words)**
- What happens in the first seconds/minutes?
- First shocking fact — make it visceral and physical

**3. ESCALATION (10-30 sec | ~40-50 words)**
- Things get progressively worse
- Chain reaction structure: "Because of X, now Y happens. And that triggers Z."
- Include 2-3 escalating consequences with specific numbers/statistics
- Each consequence worse than the last

**4. CLIMAX (30-42 sec | ~20-25 words)**
- The most mind-blowing or terrifying consequence
- The "holy sh*t" moment — save the most shocking fact for HERE

**5. CTA CLOSE (42-48 sec | ~10-12 words)**
- End with an engaging question that forces comments
- Make it debatable or thought-provoking

### SCRIPT RULES
- ❌ Do NOT start with "Hey guys" or "What's up"
- ❌ Do NOT use "imagine if" — state it as if it IS happening
- ❌ Do NOT use overly technical jargon — 8th-grade reading level
- ❌ Do NOT include hashtags, emojis, or metadata
- ❌ Do NOT exceed 130 words
- ❌ Do NOT use "scientists say" or "according to research" — state facts confidently

---

## PHASE 2: SCRIPT SEGMENTATION + IMAGE PROMPTS

After writing the script:

1. Break the script into **segments of 5-8 words each**
2. Each segment represents ONE visual scene in the video
3. For EACH segment, write an **image generation prompt**

### IMAGE PROMPT RULES
- Style: **Photorealistic, cinematic, hyper-detailed**
- Aspect ratio: Always include "vertical 9:16 aspect ratio"
- Always include: "photorealistic, cinematic lighting, ultra-detailed, 4K, dramatic atmosphere"
- Match the emotion of the script segment (fear, shock, calm, chaos)
- Use specific camera angles: "wide shot", "close-up", "aerial view", "eye-level", "low angle"
- Include lighting direction: "golden hour", "dark moody", "harsh shadows", "neon glow", "overcast"
- Describe colors, textures, and environment in detail
- NO text, watermarks, logos, or UI elements in the image
- NO humans with deformed faces or hands — if humans are needed, show them from behind, silhouette, or far away
- Each prompt should be 30-60 words
- Every image must feel like a frame from a Hollywood blockbuster

---

## PHASE 3: IMAGE-TO-VIDEO PROMPTS

For EACH image, write an **image-to-video generation prompt** that describes:

### VIDEO PROMPT RULES
- Duration: Each clip should be **3-5 seconds**
- Describe the MOTION that should happen in the scene (camera movement + subject movement)
- Camera movements to use: "slow zoom in", "slow zoom out", "pan left to right", "tracking shot", "dolly forward", "static with subtle shake", "crane shot upward"
- Subject movements: "water rising", "debris flying", "clouds forming rapidly", "light fading", "cracks spreading", "dust particles floating"
- Include atmosphere changes: "fog rolling in", "sky darkening", "temperature haze"
- Maintain the cinematic, dramatic tone
- Each prompt should be 20-40 words
- Do NOT describe any text overlays or UI elements

---

## OUTPUT FORMAT

Return everything in this EXACT structure:

---

## 📋 VIDEO PRODUCTION PACKAGE

**Title:** [the title]
**Total Words:** [word count]
**Estimated Duration:** [seconds]
**Total Scenes:** [number of segments]

---

### 📝 FULL SCRIPT

[Complete voiceover script, each sentence on its own line]

---

### 🎬 SCENE-BY-SCENE PRODUCTION TABLE

| Scene # | ⏱️ Duration | 🎤 Script Segment | 🖼️ Image Prompt | 🎥 Video Prompt |
|---------|------------|-------------------|-----------------|-----------------| 
| 1 | [X sec] | [5-8 words from script] | [Full image generation prompt] | [Full image-to-video prompt] |
| 2 | [X sec] | [next 5-8 words] | [Full image generation prompt] | [Full image-to-video prompt] |
| ... | ... | ... | ... | ... |

---

### 📊 PRODUCTION SUMMARY

- **Total Scenes:** [number]
- **Total Duration:** [seconds]
- **Image Prompts Generated:** [number]
- **Video Prompts Generated:** [number]

---

## IMPORTANT NOTES
- Make sure ALL script words are covered in the scene table — no words should be skipped
- The scenes should flow naturally — visual continuity matters
- The total duration of all video clips combined should equal ~45-50 seconds
- Each scene should have a distinct visual — avoid repeating similar prompts
- The climax scene should have the most dramatic/intense visual prompt`;

const CALENDAR_DATA = [
  {date:"May 1",day:"Thursday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Every Phone on Earth Died Right Now?"},
    {time:"5:00 PM",icon:"🌆",title:"What If Grocery Stores Ran Out of Food Overnight?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Your Tap Water Stopped Working Forever?"}
  ]},{date:"May 2",day:"Friday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If WiFi Disappeared for 30 Days?"},
    {time:"5:00 PM",icon:"🌆",title:"What If Every Car on Earth Stopped Working?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Cash Became Worthless Overnight?"}
  ]},{date:"May 3",day:"Saturday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Electricity Vanished for 1 Month?"},
    {time:"5:00 PM",icon:"🌆",title:"What If No One Could Lie for 24 Hours?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Every Door in the World Locked at Once?"}
  ]},{date:"May 4",day:"Sunday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Alarm Clocks Never Existed?"},
    {time:"5:00 PM",icon:"🌆",title:"What If You Couldn't Use Google Ever Again?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Every Traffic Light Turned Green at Once?"}
  ]},{date:"May 5",day:"Monday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Air Conditioning Stopped Working in Summer?"},
    {time:"5:00 PM",icon:"🌆",title:"What If All Passwords Became Public?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Your GPS Sent You to the Wrong Place Forever?"}
  ]},{date:"May 6",day:"Tuesday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Social Media Got Banned Worldwide?"},
    {time:"5:00 PM",icon:"🌆",title:"What If Elevators Disappeared Overnight?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Every Bank Account Hit Zero at Once?"}
  ]},{date:"May 7",day:"Wednesday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Your Home Had No Locks?"},
    {time:"5:00 PM",icon:"🌆",title:"What If Every Plane Was Grounded Forever?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Gas Stations Ran Out of Fuel Permanently?"}
  ]},{date:"May 8",day:"Thursday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Refrigerators Were Never Invented?"},
    {time:"5:00 PM",icon:"🌆",title:"What If Every Camera in the World Was Watching You?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Mail and Packages Stopped Being Delivered?"}
  ]},{date:"May 9",day:"Friday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Your Credit Score Dropped to Zero?"},
    {time:"5:00 PM",icon:"🌆",title:"What If Every Bridge in America Collapsed?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Pharmacies Ran Out of Every Medicine?"}
  ]},{date:"May 10",day:"Saturday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Toilets Were Never Invented?"},
    {time:"5:00 PM",icon:"🌆",title:"What If Every Secret You Had Became Public?"},
    {time:"10:00 PM",icon:"🌙",title:"What If 911 Stopped Working for 24 Hours?"}
  ]},{date:"May 11",day:"Sunday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Schools Disappeared Overnight?"},
    {time:"5:00 PM",icon:"🌆",title:"What If Every Window in Your City Shattered?"},
    {time:"10:00 PM",icon:"🌙",title:"What If No One Could Drive for 1 Week?"}
  ]},{date:"May 12",day:"Monday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Your House Had No Roof for a Month?"},
    {time:"5:00 PM",icon:"🌆",title:"What If Amazon Shut Down Permanently?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Sunglasses and Shade Didn't Exist?"}
  ]},{date:"May 13",day:"Tuesday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Every ATM Ran Out of Cash?"},
    {time:"5:00 PM",icon:"🌆",title:"What If Your Neighbors Could Hear Everything You Said?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Public Bathrooms Disappeared Forever?"}
  ]},{date:"May 14",day:"Wednesday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Hot Water Stopped Working Everywhere?"},
    {time:"5:00 PM",icon:"🌆",title:"What If Every Road Turned into Dirt Overnight?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Your Alarm Didn't Go Off for a Year?"}
  ]},{date:"May 15",day:"Thursday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If All Clocks Stopped Working?"},
    {time:"5:00 PM",icon:"🌆",title:"What If You Could Never Lock Your Car Again?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Washing Machines Were Never Invented?"}
  ]},{date:"May 16",day:"Friday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Every Hospital Closed for 48 Hours?"},
    {time:"5:00 PM",icon:"🌆",title:"What If Your Phone Recorded Everything 24/7?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Trash Collection Stopped for 6 Months?"}
  ]},{date:"May 17",day:"Saturday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Your Landlord Could Enter Anytime?"},
    {time:"5:00 PM",icon:"🌆",title:"What If Coffee Disappeared from the Planet?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Every Streetlight Went Dark Tonight?"}
  ]},{date:"May 18",day:"Sunday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Microwaves Were Never Invented?"},
    {time:"5:00 PM",icon:"🌆",title:"What If You Had to Pay for Air to Breathe?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Every Pet on Earth Ran Away at Once?"}
  ]},{date:"May 19",day:"Monday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Your ID and Documents Vanished Overnight?"},
    {time:"5:00 PM",icon:"🌆",title:"What If Mirrors Showed You 10 Years Older?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Every Pipe in Your City Burst at Once?"}
  ]},{date:"May 20",day:"Tuesday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Nobody Showed Up to Work Tomorrow?"},
    {time:"5:00 PM",icon:"🌆",title:"What If You Lost Your Voice Permanently?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Every Battery in the World Died at Once?"}
  ]},{date:"May 21",day:"Wednesday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If You Could Never Close Your Eyes?"},
    {time:"5:00 PM",icon:"🌆",title:"What If Plastic Was Never Invented?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Fire Trucks Took 1 Hour to Arrive?"}
  ]},{date:"May 22",day:"Thursday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Every Fence and Wall Disappeared?"},
    {time:"5:00 PM",icon:"🌆",title:"What If You Had to Walk Everywhere for a Year?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Your Clothes Disappeared While You Were Outside?"}
  ]},{date:"May 23",day:"Friday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Uber and Taxis Stopped Existing?"},
    {time:"5:00 PM",icon:"🌆",title:"What If Your Home Address Was Shared with Everyone?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Glasses and Contacts Were Never Invented?"}
  ]},{date:"May 24",day:"Saturday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Soap Disappeared from Earth?"},
    {time:"5:00 PM",icon:"🌆",title:"What If Every Ceiling Fan and AC Broke in July?"},
    {time:"10:00 PM",icon:"🌙",title:"What If The Entire Internet Had a 1-Week Outage?"}
  ]},{date:"May 25",day:"Sunday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Your Salary Was Cut in Half Starting Tomorrow?"},
    {time:"5:00 PM",icon:"🌆",title:"What If Zippers and Buttons Stopped Working?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Every Satellite Fell from the Sky?"}
  ]},{date:"May 26",day:"Monday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If You Were Stuck in an Elevator for 7 Days?"},
    {time:"5:00 PM",icon:"🌆",title:"What If Sugar Was Banned Worldwide?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Your Bed Disappeared and You Slept on the Floor?"}
  ]},{date:"May 27",day:"Tuesday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Dentists Didn't Exist?"},
    {time:"5:00 PM",icon:"🌆",title:"What If Every Staircase Turned into a Slide?"},
    {time:"10:00 PM",icon:"🌙",title:"What If No One Could Use Their Hands for a Day?"}
  ]},{date:"May 28",day:"Wednesday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Your Food Had No Taste for a Month?"},
    {time:"5:00 PM",icon:"🌆",title:"What If Everyone Could Read Your Mind?"},
    {time:"10:00 PM",icon:"🌙",title:"What If All Glass on Earth Shattered at Once?"}
  ]},{date:"May 29",day:"Thursday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Sunlight Only Lasted 4 Hours a Day?"},
    {time:"5:00 PM",icon:"🌆",title:"What If Your Fingerprint Changed Every Day?"},
    {time:"10:00 PM",icon:"🌙",title:"What If Nobody Could Swim and the Floods Came?"}
  ]},{date:"May 30",day:"Friday",slots:[
    {time:"8:00 AM",icon:"🌅",title:"What If Every Charger in the World Broke?"},
    {time:"5:00 PM",icon:"🌆",title:"What If Rent Doubled Overnight Across America?"},
    {time:"10:00 PM",icon:"🌙",title:"What If You Woke Up and Every Human Was Gone?"}
  ]}
];
