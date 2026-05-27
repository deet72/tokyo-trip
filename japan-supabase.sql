-- If you've already run the shared-edit Supabase setup for the Balkans map, this is the only Japan-specific row SQL you need.

insert into public.trips (slug, title, owner_id, data)
values (
  'japan-2026',
  'Japan Trip 2026',
  '93a8c093-517d-4155-b2da-c73f40b5db4e',
  $json${
  "dayGroups": [
    {
      "key": "Thu 4 Jun",
      "label": "Thu 4 Jun - overnight flight to Japan",
      "color": "#64748b"
    },
    {
      "key": "Fri 5 Jun",
      "label": "Fri 5 Jun - Tokyo arrival, Zojo-ji + Ginza",
      "color": "#ef4444"
    },
    {
      "key": "Sat 6 Jun",
      "label": "Sat 6 Jun - Harajuku, Shibuya + cats",
      "color": "#2563eb"
    },
    {
      "key": "Sun 7 Jun",
      "label": "Sun 7 Jun - Mt Fuji day trip",
      "color": "#16a34a"
    },
    {
      "key": "Mon 8 Jun",
      "label": "Mon 8 Jun - Asakusa + Akihabara",
      "color": "#7c3aed"
    },
    {
      "key": "Tue 9 Jun",
      "label": "Tue 9 Jun - teamLab + Odaiba",
      "color": "#f97316"
    },
    {
      "key": "Wed 10 Jun",
      "label": "Wed 10 Jun - Tokyo to Kyoto, 10:21-12:32",
      "color": "#0f766e"
    },
    {
      "key": "Thu 11 Jun",
      "label": "Thu 11 Jun - Kyoto east side + tea ceremony",
      "color": "#b45309"
    },
    {
      "key": "Fri 12 Jun",
      "label": "Fri 12 Jun - Hozugawa boat ride + Arashiyama",
      "color": "#0891b2"
    },
    {
      "key": "Sat 13 Jun",
      "label": "Sat 13 Jun - free Kyoto day",
      "color": "#be123c"
    },
    {
      "key": "Sun 14 Jun",
      "label": "Sun 14 Jun - Kyoto to Osaka",
      "color": "#4f46e5"
    },
    {
      "key": "Mon 15 Jun",
      "label": "Mon 15 Jun - Universal Studios Japan",
      "color": "#ea580c"
    },
    {
      "key": "Tue 16 Jun",
      "label": "Tue 16 Jun - free Osaka day",
      "color": "#0ea5a4"
    },
    {
      "key": "Wed 17 Jun",
      "label": "Wed 17 Jun - Osaka to Hiroshima",
      "color": "#9333ea"
    },
    {
      "key": "Thu 18 Jun",
      "label": "Thu 18 Jun - Hiroshima then back to Tokyo",
      "color": "#dc2626"
    },
    {
      "key": "Fri 19 Jun",
      "label": "Fri 19 Jun - easy Shinjuku day",
      "color": "#256f3a"
    },
    {
      "key": "Sat 20 Jun",
      "label": "Sat 20 Jun - DisneySea",
      "color": "#c026d3"
    },
    {
      "key": "Sun 21 Jun",
      "label": "Sun 21 Jun - final Tokyo day",
      "color": "#ca8a04"
    },
    {
      "key": "Mon 22 Jun",
      "label": "Mon 22 Jun - fly home",
      "color": "#334155"
    }
  ],
  "places": [
    {
      "name": "Overnight flight to Haneda",
      "dayGroups": [
        "Thu 4 Jun"
      ],
      "dayLabel": "Thu 4 Jun",
      "status": "Booked / fixed",
      "category": "Travel / stations",
      "lat": 35.5494,
      "lng": 139.7798,
      "search": "Haneda Airport Tokyo",
      "notes": "Pinned on Haneda so the map stays Japan-focused. This represents the Dublin to Frankfurt to overnight Japan flight."
    },
    {
      "name": "Haneda Airport arrival",
      "dayGroups": [
        "Fri 5 Jun"
      ],
      "dayLabel": "Fri 5 Jun",
      "status": "Booked / fixed",
      "category": "Travel / stations",
      "lat": 35.5494,
      "lng": 139.7798,
      "search": "Haneda Airport Tokyo",
      "notes": "Arrival into Tokyo after the overnight flight. Useful first pin for luggage, SIM, Suica and train timing."
    },
    {
      "name": "Hotel Villa Fontaine Grand Tokyo-Shiodome",
      "dayGroups": [
        "Fri 5 Jun",
        "Sat 6 Jun",
        "Sun 7 Jun",
        "Mon 8 Jun",
        "Tue 9 Jun",
        "Wed 10 Jun"
      ],
      "dayLabel": "Stay: Fri 5-Wed 10 Jun checkout",
      "status": "Booked / fixed",
      "category": "Hotels / stays",
      "lat": 35.6643,
      "lng": 139.7607,
      "search": "Hotel Villa Fontaine Grand Tokyo-Shiodome",
      "notes": "First Tokyo base. Leave luggage on arrival day if the room is not ready yet."
    },
    {
      "name": "Hamarikyu Gardens",
      "dayGroups": [
        "Fri 5 Jun"
      ],
      "dayLabel": "Fri 5 Jun",
      "status": "Suggested add-on",
      "category": "Views / scenic",
      "lat": 35.66,
      "lng": 139.7633,
      "search": "Hamarikyu Gardens Tokyo",
      "notes": "Very easy low-energy add-on near the Shiodome hotel if the first afternoon needs to stay light."
    },
    {
      "name": "Zojo-ji Temple",
      "dayGroups": [
        "Fri 5 Jun"
      ],
      "dayLabel": "Fri 5 Jun",
      "status": "Planned highlight",
      "category": "Culture & heritage",
      "lat": 35.6581,
      "lng": 139.7486,
      "search": "Zojoji Temple 4-7-35 Shiba-koen Minato City Tokyo",
      "notes": "Very easy arrival-day temple stop from Shiodome, and great with the Tokyo Tower backdrop."
    },
    {
      "name": "Ginza",
      "dayGroups": [
        "Fri 5 Jun"
      ],
      "dayLabel": "Fri 5 Jun",
      "status": "Planned highlight",
      "category": "Shopping / city areas",
      "lat": 35.6719,
      "lng": 139.765,
      "search": "Ginza Tokyo",
      "notes": "Easy arrival afternoon area for wandering, shopping and working in Age.3."
    },
    {
      "name": "Age.3 Ginza",
      "dayGroups": [
        "Fri 5 Jun",
        "Mon 8 Jun"
      ],
      "dayLabel": "Fri 5 Jun or Mon 8 Jun",
      "status": "Planned highlight",
      "category": "Cafes & food",
      "lat": 35.674,
      "lng": 139.7715,
      "search": "Age.3 Ginza 1-24-11 Ginza Chuo Tokyo",
      "notes": "Your cream-sandwich stop. It fits best on arrival day or as a detour if you loop back through central Tokyo."
    },
    {
      "name": "UNIQLO Ginza",
      "dayGroups": [
        "Fri 5 Jun"
      ],
      "dayLabel": "Fri 5 Jun",
      "status": "Planned highlight",
      "category": "Shopping / city areas",
      "lat": 35.6708,
      "lng": 139.7637,
      "search": "UNIQLO Ginza 6-9-5 Ginza Chuo City Tokyo",
      "notes": "Makes perfect sense with your Ginza wander and is one of the biggest Uniqlo stores in Tokyo."
    },
    {
      "name": "Matcha ice cream (EXITMELSA)",
      "dayGroups": [
        "Fri 5 Jun"
      ],
      "dayLabel": "Fri 5 Jun",
      "status": "Planned highlight",
      "category": "Cafes & food",
      "lat": 35.6712,
      "lng": 139.7636,
      "search": "東京都中央区銀座5-7-10 EXITMELSA 1F",
      "notes": "Matcha ice cream stop in Ginza at EXITMELSA, 1F. Easy to slot into the same wander as UNIQLO Ginza and Age.3."
    },
    {
      "name": "Shibuya Crossing",
      "dayGroups": [
        "Sat 6 Jun"
      ],
      "dayLabel": "Sat 6 Jun",
      "status": "Planned highlight",
      "category": "Shopping / city areas",
      "lat": 35.6595,
      "lng": 139.7005,
      "search": "Shibuya Crossing Tokyo",
      "notes": "Moved onto Saturday so your main Shibuya block sits together."
    },
    {
      "name": "Shibuya Sky",
      "dayGroups": [
        "Sat 6 Jun"
      ],
      "dayLabel": "Sat 6 Jun at 18:40",
      "status": "Booked / fixed",
      "category": "Views / scenic",
      "lat": 35.6585,
      "lng": 139.702,
      "search": "Shibuya Sky Tokyo",
      "notes": "Booked for 18:40 on Saturday 6 June, which is a great sunset / early-evening time."
    },
    {
      "name": "MEGA Don Quijote Shibuya",
      "dayGroups": [
        "Sat 6 Jun"
      ],
      "dayLabel": "Sat 6 Jun",
      "status": "Planned highlight",
      "category": "Shopping / city areas",
      "lat": 35.6605,
      "lng": 139.6973,
      "search": "MEGA Don Quijote Shibuya",
      "notes": "Good Shibuya-night snack, souvenir and general chaos stop."
    },
    {
      "name": "Sweet Check",
      "dayGroups": [
        "Sat 6 Jun"
      ],
      "dayLabel": "Sat 6 Jun",
      "status": "Planned highlight",
      "category": "Cafes & food",
      "lat": 35.6658,
      "lng": 139.7138,
      "search": "Sweet Check 3-18-5 Minami-Aoyama Minato-ku Tokyo",
      "notes": "Easy Omotesando / Aoyama stop to pair with Harajuku before you continue toward Shibuya."
    },
    {
      "name": "Cafe Reissue",
      "dayGroups": [
        "Sat 6 Jun"
      ],
      "dayLabel": "Sat 6 Jun",
      "status": "Planned highlight",
      "category": "Cafes & food",
      "lat": 35.6694,
      "lng": 139.707,
      "search": "Cafe Reissue 3 Chome-25-7 Jingumae Shibuya Tokyo",
      "notes": "3D latte art cafe. Earlier is better if you want to dodge some queue time."
    },
    {
      "name": "Takeshita Street / Harajuku",
      "dayGroups": [
        "Sat 6 Jun"
      ],
      "dayLabel": "Sat 6 Jun",
      "status": "Planned highlight",
      "category": "Shopping / city areas",
      "lat": 35.6717,
      "lng": 139.7035,
      "search": "Takeshita Street Harajuku Tokyo",
      "notes": "Shopping, snacks, crepes, character stores and general Harajuku energy."
    },
    {
      "name": "Cat Cafe MoCHA Harajuku",
      "dayGroups": [
        "Sat 6 Jun"
      ],
      "dayLabel": "Sat 6 Jun",
      "status": "Planned highlight",
      "category": "Cafes & food",
      "lat": 35.671,
      "lng": 139.7049,
      "search": "Cat Cafe MoCHA Harajuku Tokyo",
      "notes": "Pinned as the best current match for your ''Cat On'' coffee-place note. Swap this if you meant a different cat cafe."
    },
    {
      "name": "Meiji Shrine",
      "dayGroups": [
        "Sat 6 Jun"
      ],
      "dayLabel": "Sat 6 Jun",
      "status": "Suggested add-on",
      "category": "Culture & heritage",
      "lat": 35.6764,
      "lng": 139.6993,
      "search": "Meiji Shrine Tokyo",
      "notes": "Strong add-on beside Harajuku if you want a calm contrast to the busier shopping streets."
    },
    {
      "name": "Gotokuji Temple",
      "dayGroups": [
        "Sat 6 Jun"
      ],
      "dayLabel": "Sat 6 Jun",
      "status": "Planned highlight",
      "category": "Culture & heritage",
      "lat": 35.6531,
      "lng": 139.6475,
      "search": "Gotokuji Temple Tokyo",
      "notes": "Cat temple day. It is a bit west of the main tourist core, so treat it as a deliberate side trip."
    },
    {
      "name": "BAM BI COFFEE",
      "dayGroups": [
        "Sat 6 Jun"
      ],
      "dayLabel": "Sat 6 Jun",
      "status": "Planned highlight",
      "category": "Cafes & food",
      "lat": 35.7007,
      "lng": 139.7054,
      "search": "BAM BI COFFEE Tokyo",
      "notes": "Pairs well with a Shin-Okubo or Shinjuku evening."
    },
    {
      "name": "Omoide Yokocho / Golden Gai",
      "dayGroups": [
        "Sat 6 Jun",
        "Fri 19 Jun",
        "Sun 21 Jun"
      ],
      "dayLabel": "Sat 6 Jun or final Tokyo nights",
      "status": "Suggested add-on",
      "category": "Cafes & food",
      "lat": 35.6939,
      "lng": 139.6995,
      "search": "Omoide Yokocho Tokyo",
      "notes": "Easy atmospheric night stop from either Tokyo stay if you want lantern-lit alleys and late food."
    },
    {
      "name": "Mt Fuji day trip meeting point",
      "dayGroups": [
        "Sun 7 Jun"
      ],
      "dayLabel": "Sun 7 Jun",
      "status": "Booked / fixed",
      "category": "Experiences / tickets",
      "lat": 35.6896,
      "lng": 139.7005,
      "search": "Mt Fuji tour meeting point Shinjuku Tokyo",
      "notes": "Pinned near Shinjuku as a practical placeholder for the 08:30 meeting until the exact booking point is confirmed."
    },
    {
      "name": "Senso-ji Temple",
      "dayGroups": [
        "Mon 8 Jun"
      ],
      "dayLabel": "Mon 8 Jun",
      "status": "Planned highlight",
      "category": "Culture & heritage",
      "lat": 35.7148,
      "lng": 139.7967,
      "search": "Senso-ji Temple Tokyo",
      "notes": "Good early stop before the area gets busier."
    },
    {
      "name": "Nakamise-dori",
      "dayGroups": [
        "Mon 8 Jun"
      ],
      "dayLabel": "Mon 8 Jun",
      "status": "Suggested add-on",
      "category": "Cafes & food",
      "lat": 35.7128,
      "lng": 139.7965,
      "search": "Nakamise Dori Asakusa Tokyo",
      "notes": "Makes Senso-ji feel like a fuller half-day with snacks and souvenir browsing on the approach."
    },
    {
      "name": "Mochinyan-yaki",
      "dayGroups": [
        "Mon 8 Jun"
      ],
      "dayLabel": "Mon 8 Jun",
      "status": "Planned highlight",
      "category": "Cafes & food",
      "lat": 35.7136,
      "lng": 139.7962,
      "search": "Mochinyan-yaki 2-3-25 Asakusa Taito City Tokyo",
      "notes": "Chewy cat-shaped pancake stop in Asakusa, easy to do while you are around Senso-ji and Nakamise."
    },
    {
      "name": "Tokyo Skytree",
      "dayGroups": [
        "Mon 8 Jun"
      ],
      "dayLabel": "Mon 8 Jun",
      "status": "Planned highlight",
      "category": "Views / scenic",
      "lat": 35.7101,
      "lng": 139.8107,
      "search": "Tokyo Skytree",
      "notes": "Makes sense as the next east-Tokyo stop after Asakusa before heading onward."
    },
    {
      "name": "Ueno Zoo",
      "dayGroups": [
        "Mon 8 Jun"
      ],
      "dayLabel": "Mon 8 Jun",
      "status": "Planned highlight",
      "category": "Culture & heritage",
      "lat": 35.7168,
      "lng": 139.7714,
      "search": "Ueno Zoological Gardens 9-83 Ueno Park Taito City Tokyo",
      "notes": "Good add-on if you want to keep Monday focused on the east side of Tokyo before Akihabara."
    },
    {
      "name": "Akihabara",
      "dayGroups": [
        "Mon 8 Jun"
      ],
      "dayLabel": "Mon 8 Jun",
      "status": "Planned highlight",
      "category": "Shopping / city areas",
      "lat": 35.6997,
      "lng": 139.7714,
      "search": "Akihabara Tokyo",
      "notes": "Best fit for vending-machine wandering, arcades, gachapon, anime and electronics."
    },
    {
      "name": "Tokyo Station / Character Street",
      "dayGroups": [
        "Mon 8 Jun",
        "Wed 10 Jun"
      ],
      "dayLabel": "Mon 8 Jun or Wed 10 Jun",
      "status": "Suggested add-on",
      "category": "Shopping / city areas",
      "lat": 35.6812,
      "lng": 139.7671,
      "search": "Tokyo Character Street Tokyo Station",
      "notes": "Useful suggestion for character shopping and also handy train-station familiarity before your 10:21 train to Kyoto."
    },
    {
      "name": "teamLab Planets TOKYO",
      "dayGroups": [
        "Tue 9 Jun"
      ],
      "dayLabel": "Tue 9 Jun at 09:30",
      "status": "Booked / fixed",
      "category": "Experiences / tickets",
      "lat": 35.6491,
      "lng": 139.7898,
      "search": "teamLab Planets Tokyo",
      "notes": "Booked for 09:30. Clothing that can roll above the knee makes the water rooms easier."
    },
    {
      "name": "Toyosu Market / waterfront",
      "dayGroups": [
        "Tue 9 Jun"
      ],
      "dayLabel": "Tue 9 Jun",
      "status": "Suggested add-on",
      "category": "Cafes & food",
      "lat": 35.6468,
      "lng": 139.7847,
      "search": "Toyosu Market Tokyo",
      "notes": "A very sensible food stop right after teamLab if you want lunch nearby."
    },
    {
      "name": "DiverCity Tokyo Plaza / Gundam",
      "dayGroups": [
        "Tue 9 Jun"
      ],
      "dayLabel": "Tue 9 Jun",
      "status": "Suggested add-on",
      "category": "Shopping / city areas",
      "lat": 35.6252,
      "lng": 139.7757,
      "search": "DiverCity Tokyo Plaza Gundam",
      "notes": "Good Odaiba shopping anchor with the giant Gundam statue."
    },
    {
      "name": "Odaiba Seaside Park",
      "dayGroups": [
        "Tue 9 Jun"
      ],
      "dayLabel": "Tue 9 Jun",
      "status": "Suggested add-on",
      "category": "Views / scenic",
      "lat": 35.6299,
      "lng": 139.7765,
      "search": "Odaiba Seaside Park Tokyo",
      "notes": "Worth it if the weather is kind and you want a breather between indoor stops."
    },
    {
      "name": "Tokyo Tower",
      "dayGroups": [
        "Tue 9 Jun"
      ],
      "dayLabel": "Tue 9 Jun",
      "status": "Suggested add-on",
      "category": "Views / scenic",
      "lat": 35.6586,
      "lng": 139.7454,
      "search": "Tokyo Tower",
      "notes": "Nice last-night-of-the-first-stay option because it is not too awkward from Shiodome."
    },
    {
      "name": "Tokyo Station",
      "dayGroups": [
        "Wed 10 Jun"
      ],
      "dayLabel": "Wed 10 Jun - 10:21 departure",
      "status": "Booked / fixed",
      "category": "Travel / stations",
      "lat": 35.6812,
      "lng": 139.7671,
      "search": "Tokyo Station",
      "notes": "Train to Kyoto departs Tokyo Station at 10:21."
    },
    {
      "name": "Kyoto Station",
      "dayGroups": [
        "Wed 10 Jun",
        "Sun 14 Jun"
      ],
      "dayLabel": "Wed 10 Jun - 12:32 arrival or Sun 14 Jun",
      "status": "Booked / fixed",
      "category": "Travel / stations",
      "lat": 34.9855,
      "lng": 135.7585,
      "search": "Kyoto Station",
      "notes": "Arrive from Tokyo at 12:32 on Wednesday 10 June, then later use it again for the Osaka transfer on Sunday 14 June."
    },
    {
      "name": "Homm Stay Nagi Shijo Kyoto By Banyan Group",
      "dayGroups": [
        "Wed 10 Jun",
        "Thu 11 Jun",
        "Fri 12 Jun",
        "Sat 13 Jun",
        "Sun 14 Jun"
      ],
      "dayLabel": "Stay: Wed 10-Sun 14 Jun checkout",
      "status": "Booked / fixed",
      "category": "Hotels / stays",
      "lat": 35.0053,
      "lng": 135.7537,
      "search": "Homm Stay Nagi Shijo Kyoto By Banyan Group",
      "notes": "Kyoto base near the Shijo area, mapped close to the hotel listing for easy city-centre routing."
    },
    {
      "name": "Nishiki Market",
      "dayGroups": [
        "Wed 10 Jun",
        "Sat 13 Jun"
      ],
      "dayLabel": "Wed 10 Jun or Sat 13 Jun",
      "status": "Suggested add-on",
      "category": "Cafes & food",
      "lat": 35.005,
      "lng": 135.7643,
      "search": "Nishiki Market Kyoto",
      "notes": "Good easy first-evening or last-full-day Kyoto stop for snacks without a big detour."
    },
    {
      "name": "Fushimi Inari Taisha",
      "dayGroups": [
        "Thu 11 Jun"
      ],
      "dayLabel": "Thu 11 Jun",
      "status": "Suggested add-on",
      "category": "Culture & heritage",
      "lat": 34.9671,
      "lng": 135.7727,
      "search": "Fushimi Inari Taisha Kyoto",
      "notes": "A strong early-morning Kyoto add-on before your 13:00 tea ceremony."
    },
    {
      "name": "Tea ceremony - Kyoto Maikoya Gion Kiyomizu",
      "dayGroups": [
        "Thu 11 Jun"
      ],
      "dayLabel": "Thu 11 Jun at 13:00",
      "status": "Booked / fixed",
      "category": "Experiences / tickets",
      "lat": 34.9976,
      "lng": 135.7741,
      "search": "Kyoto Geisha Show & Experience GION MAIKOYA 100 Rokurocho Higashiyama Ward Kyoto 605-0813 Japan",
      "notes": "Exact tea-ceremony venue: 100 Rokurocho, Higashiyama Ward, Kyoto 605-0813."
    },
    {
      "name": "Gion / Yasaka Shrine",
      "dayGroups": [
        "Thu 11 Jun",
        "Sat 13 Jun"
      ],
      "dayLabel": "Thu 11 Jun or Sat 13 Jun",
      "status": "Suggested add-on",
      "category": "Culture & heritage",
      "lat": 35.0037,
      "lng": 135.7788,
      "search": "Yasaka Shrine Kyoto",
      "notes": "Fits beautifully before or after the tea ceremony and also works for your free Kyoto day."
    },
    {
      "name": "Hozugawa River Boat Ride (Hozugawa Kudari)",
      "dayGroups": [
        "Fri 12 Jun"
      ],
      "dayLabel": "Fri 12 Jun at 10:00",
      "status": "Booked / fixed",
      "category": "Experiences / tickets",
      "lat": 35.0282,
      "lng": 135.5908,
      "search": "Hozugawa River Boat Ride Hozugawa Kudari Shimonakajima-2 Hozucho Kameoka Kyoto 621-0005 Japan",
      "notes": "Exact boat-ride departure: Shimonakajima-2, Hozucho, Kameoka, Kyoto 621-0005."
    },
    {
      "name": "Togetsukyo Bridge",
      "dayGroups": [
        "Fri 12 Jun"
      ],
      "dayLabel": "Fri 12 Jun",
      "status": "Suggested add-on",
      "category": "Views / scenic",
      "lat": 35.0118,
      "lng": 135.6777,
      "search": "Togetsukyo Bridge Kyoto",
      "notes": "An easy visual anchor if your boat trip is indeed in or near Arashiyama."
    },
    {
      "name": "Arashiyama Bamboo Grove",
      "dayGroups": [
        "Fri 12 Jun"
      ],
      "dayLabel": "Fri 12 Jun",
      "status": "Suggested add-on",
      "category": "Views / scenic",
      "lat": 35.017,
      "lng": 135.6713,
      "search": "Arashiyama Bamboo Grove Kyoto",
      "notes": "Makes the Arashiyama half-day feel more complete if your schedule has room."
    },
    {
      "name": "Kiyomizu-dera",
      "dayGroups": [
        "Sat 13 Jun"
      ],
      "dayLabel": "Sat 13 Jun",
      "status": "Suggested add-on",
      "category": "Culture & heritage",
      "lat": 34.9948,
      "lng": 135.785,
      "search": "Kiyomizu-dera Kyoto",
      "notes": "Best large-scale suggestion for the free Kyoto day if you want one classic east-Kyoto block."
    },
    {
      "name": "CANDEO HOTELS Osaka The Tower",
      "dayGroups": [
        "Sun 14 Jun",
        "Mon 15 Jun",
        "Tue 16 Jun",
        "Wed 17 Jun"
      ],
      "dayLabel": "Stay: Sun 14-Wed 17 Jun checkout",
      "status": "Booked / fixed",
      "category": "Hotels / stays",
      "lat": 34.695368,
      "lng": 135.500674,
      "search": "CANDEO HOTELS Osaka The Tower 1-1-27 Dojimahama Kita-ku Osaka 530-0004 Japan",
      "notes": "Exact Osaka hotel: 1-1-27 Dojimahama, Kita-ku, Osaka 530-0004. This puts your base on the Umeda / Dojimahama side rather than Namba."
    },
    {
      "name": "Dotonbori",
      "dayGroups": [
        "Sun 14 Jun",
        "Tue 16 Jun"
      ],
      "dayLabel": "Sun 14 Jun or Tue 16 Jun",
      "status": "Suggested add-on",
      "category": "Shopping / city areas",
      "lat": 34.6687,
      "lng": 135.5019,
      "search": "Dotonbori Osaka",
      "notes": "Best first-night Osaka suggestion if you want the classic neon food-street energy."
    },
    {
      "name": "Shinsaibashi-suji Shopping Street",
      "dayGroups": [
        "Sun 14 Jun",
        "Tue 16 Jun"
      ],
      "dayLabel": "Sun 14 Jun or Tue 16 Jun",
      "status": "Suggested add-on",
      "category": "Shopping / city areas",
      "lat": 34.6731,
      "lng": 135.5011,
      "search": "Shinsaibashi-suji Shopping Street Osaka",
      "notes": "Strong add-on for fashion and general shopping, and easy to pair with Dotonbori."
    },
    {
      "name": "Universal Studios Japan",
      "dayGroups": [
        "Mon 15 Jun"
      ],
      "dayLabel": "Mon 15 Jun",
      "status": "Booked / fixed",
      "category": "Theme parks",
      "lat": 34.6654,
      "lng": 135.4323,
      "search": "Universal Studios Japan",
      "notes": "Full theme-park day."
    },
    {
      "name": "Shinsekai / Tsutenkaku",
      "dayGroups": [
        "Tue 16 Jun"
      ],
      "dayLabel": "Tue 16 Jun",
      "status": "Suggested add-on",
      "category": "Shopping / city areas",
      "lat": 34.6525,
      "lng": 135.5063,
      "search": "Shinsekai Osaka",
      "notes": "Good free-day Osaka suggestion if you want a more retro, old-school city feel."
    },
    {
      "name": "Umeda Sky Building",
      "dayGroups": [
        "Tue 16 Jun"
      ],
      "dayLabel": "Tue 16 Jun",
      "status": "Suggested add-on",
      "category": "Views / scenic",
      "lat": 34.7053,
      "lng": 135.4894,
      "search": "Umeda Sky Building Osaka",
      "notes": "Best higher-view Osaka suggestion if you want one skyline moment outside Tokyo."
    },
    {
      "name": "Shin-Osaka Station",
      "dayGroups": [
        "Wed 17 Jun"
      ],
      "dayLabel": "Wed 17 Jun",
      "status": "Booked / fixed",
      "category": "Travel / stations",
      "lat": 34.7336,
      "lng": 135.5006,
      "search": "Shin-Osaka Station",
      "notes": "Shinkansen transfer point for Hiroshima."
    },
    {
      "name": "Hiroshima Station",
      "dayGroups": [
        "Wed 17 Jun",
        "Thu 18 Jun"
      ],
      "dayLabel": "Wed 17 Jun or Thu 18 Jun",
      "status": "Booked / fixed",
      "category": "Travel / stations",
      "lat": 34.3978,
      "lng": 132.4757,
      "search": "Hiroshima Station",
      "notes": "Arrival point from Osaka and departure point for the evening train back to Tokyo."
    },
    {
      "name": "Hilton Hiroshima",
      "dayGroups": [
        "Wed 17 Jun",
        "Thu 18 Jun"
      ],
      "dayLabel": "Stay: Wed 17-Thu 18 Jun checkout",
      "status": "Booked / fixed",
      "category": "Hotels / stays",
      "lat": 34.3869,
      "lng": 132.4699,
      "search": "Hilton Hiroshima",
      "notes": "One-night Hiroshima base."
    },
    {
      "name": "Peace Memorial Park",
      "dayGroups": [
        "Wed 17 Jun",
        "Thu 18 Jun"
      ],
      "dayLabel": "Wed 17 Jun or Thu 18 Jun",
      "status": "Suggested add-on",
      "category": "Culture & heritage",
      "lat": 34.3928,
      "lng": 132.4523,
      "search": "Peace Memorial Park Hiroshima",
      "notes": "Strong Hiroshima suggestion because it clusters several of the city''s core peace-history sites in one area."
    },
    {
      "name": "Atomic Bomb Dome",
      "dayGroups": [
        "Wed 17 Jun",
        "Thu 18 Jun"
      ],
      "dayLabel": "Wed 17 Jun or Thu 18 Jun",
      "status": "Suggested add-on",
      "category": "Culture & heritage",
      "lat": 34.3955,
      "lng": 132.4536,
      "search": "Atomic Bomb Dome Hiroshima",
      "notes": "Easy to combine with the park and museum on a short Hiroshima stay."
    },
    {
      "name": "Hiroshima Peace Memorial Museum",
      "dayGroups": [
        "Thu 18 Jun"
      ],
      "dayLabel": "Thu 18 Jun",
      "status": "Suggested add-on",
      "category": "Culture & heritage",
      "lat": 34.3914,
      "lng": 132.4519,
      "search": "Hiroshima Peace Memorial Museum",
      "notes": "Best fit on the morning of the return-to-Tokyo day if you want one focused Hiroshima museum stop."
    },
    {
      "name": "Miyajima / Itsukushima Shrine",
      "dayGroups": [
        "Thu 18 Jun"
      ],
      "dayLabel": "Thu 18 Jun",
      "status": "Suggested add-on",
      "category": "Views / scenic",
      "lat": 34.2959,
      "lng": 132.3199,
      "search": "Itsukushima Shrine Miyajima",
      "notes": "Beautiful but bigger-time-commitment Hiroshima add-on. Best only if you want to build the whole day around it before the evening train."
    },
    {
      "name": "Shinjuku Prince Hotel",
      "dayGroups": [
        "Thu 18 Jun",
        "Fri 19 Jun",
        "Sat 20 Jun",
        "Sun 21 Jun",
        "Mon 22 Jun"
      ],
      "dayLabel": "Stay: Thu 18-Mon 22 Jun checkout",
      "status": "Booked / fixed",
      "category": "Hotels / stays",
      "lat": 35.6948,
      "lng": 139.7006,
      "search": "Shinjuku Prince Hotel Tokyo",
      "notes": "Final Tokyo base."
    },
    {
      "name": "Tokyo Metropolitan Government Observatory",
      "dayGroups": [
        "Fri 19 Jun",
        "Sun 21 Jun"
      ],
      "dayLabel": "Fri 19 Jun or Sun 21 Jun",
      "status": "Suggested add-on",
      "category": "Views / scenic",
      "lat": 35.6896,
      "lng": 139.6917,
      "search": "Tokyo Metropolitan Government Building Observatory",
      "notes": "Great easy Shinjuku suggestion because it is close, free and gives you another skyline angle."
    },
    {
      "name": "Shinjuku Gyoen",
      "dayGroups": [
        "Fri 19 Jun",
        "Sun 21 Jun"
      ],
      "dayLabel": "Fri 19 Jun or Sun 21 Jun",
      "status": "Suggested add-on",
      "category": "Views / scenic",
      "lat": 35.6852,
      "lng": 139.71,
      "search": "Shinjuku Gyoen",
      "notes": "Very good slower final-Tokyo suggestion if you want a reset between heavier city days."
    },
    {
      "name": "Tokyo DisneySea",
      "dayGroups": [
        "Sat 20 Jun"
      ],
      "dayLabel": "Sat 20 Jun",
      "status": "Booked / fixed",
      "category": "Theme parks",
      "lat": 35.6266,
      "lng": 139.8857,
      "search": "Tokyo DisneySea",
      "notes": "Full DisneySea day."
    },
    {
      "name": "Haneda Airport departure",
      "dayGroups": [
        "Mon 22 Jun"
      ],
      "dayLabel": "Mon 22 Jun",
      "status": "Booked / fixed",
      "category": "Travel / stations",
      "lat": 35.5494,
      "lng": 139.7798,
      "search": "Haneda Airport Tokyo",
      "notes": "Flight home via Frankfurt back to Dublin."
    }
  ],
  "routes": [
    {
      "label": "Fri 5 Jun flow",
      "dayGroup": "Fri 5 Jun",
      "color": "#ef4444",
      "names": [
        "Haneda Airport arrival",
        "Hotel Villa Fontaine Grand Tokyo-Shiodome",
        "Hamarikyu Gardens",
        "Zojo-ji Temple",
        "Ginza",
        "UNIQLO Ginza",
        "Matcha ice cream (EXITMELSA)",
        "Age.3 Ginza",
        "Hotel Villa Fontaine Grand Tokyo-Shiodome"
      ]
    },
    {
      "label": "Sat 6 Jun flow",
      "dayGroup": "Sat 6 Jun",
      "color": "#2563eb",
      "names": [
        "Hotel Villa Fontaine Grand Tokyo-Shiodome",
        "Sweet Check",
        "Cafe Reissue",
        "Takeshita Street / Harajuku",
        "Cat Cafe MoCHA Harajuku",
        "Gotokuji Temple",
        "Shibuya Crossing",
        "Shibuya Sky",
        "MEGA Don Quijote Shibuya",
        "BAM BI COFFEE",
        "Omoide Yokocho / Golden Gai"
      ]
    },
    {
      "label": "Sun 7 Jun flow",
      "dayGroup": "Sun 7 Jun",
      "color": "#16a34a",
      "names": [
        "Hotel Villa Fontaine Grand Tokyo-Shiodome",
        "Mt Fuji day trip meeting point",
        "Hotel Villa Fontaine Grand Tokyo-Shiodome"
      ]
    },
    {
      "label": "Mon 8 Jun flow",
      "dayGroup": "Mon 8 Jun",
      "color": "#7c3aed",
      "names": [
        "Hotel Villa Fontaine Grand Tokyo-Shiodome",
        "Senso-ji Temple",
        "Mochinyan-yaki",
        "Nakamise-dori",
        "Tokyo Skytree",
        "Ueno Zoo",
        "Akihabara",
        "Tokyo Station / Character Street",
        "Hotel Villa Fontaine Grand Tokyo-Shiodome"
      ]
    },
    {
      "label": "Tue 9 Jun flow",
      "dayGroup": "Tue 9 Jun",
      "color": "#f97316",
      "names": [
        "Hotel Villa Fontaine Grand Tokyo-Shiodome",
        "teamLab Planets TOKYO",
        "Toyosu Market / waterfront",
        "DiverCity Tokyo Plaza / Gundam",
        "Odaiba Seaside Park",
        "Tokyo Tower",
        "Hotel Villa Fontaine Grand Tokyo-Shiodome"
      ]
    },
    {
      "label": "Wed 10 Jun transfer (10:21-12:32)",
      "dayGroup": "Wed 10 Jun",
      "color": "#0f766e",
      "dashArray": "8 8",
      "names": [
        "Hotel Villa Fontaine Grand Tokyo-Shiodome",
        "Tokyo Station",
        "Kyoto Station",
        "Homm Stay Nagi Shijo Kyoto By Banyan Group",
        "Nishiki Market"
      ]
    },
    {
      "label": "Thu 11 Jun flow",
      "dayGroup": "Thu 11 Jun",
      "color": "#b45309",
      "names": [
        "Homm Stay Nagi Shijo Kyoto By Banyan Group",
        "Fushimi Inari Taisha",
        "Tea ceremony - Kyoto Maikoya Gion Kiyomizu",
        "Gion / Yasaka Shrine",
        "Homm Stay Nagi Shijo Kyoto By Banyan Group"
      ]
    },
    {
      "label": "Fri 12 Jun flow",
      "dayGroup": "Fri 12 Jun",
      "color": "#0891b2",
      "names": [
        "Homm Stay Nagi Shijo Kyoto By Banyan Group",
        "Hozugawa River Boat Ride (Hozugawa Kudari)",
        "Togetsukyo Bridge",
        "Arashiyama Bamboo Grove",
        "Homm Stay Nagi Shijo Kyoto By Banyan Group"
      ]
    },
    {
      "label": "Sat 13 Jun flow",
      "dayGroup": "Sat 13 Jun",
      "color": "#be123c",
      "names": [
        "Homm Stay Nagi Shijo Kyoto By Banyan Group",
        "Kiyomizu-dera",
        "Gion / Yasaka Shrine",
        "Nishiki Market",
        "Homm Stay Nagi Shijo Kyoto By Banyan Group"
      ]
    },
    {
      "label": "Sun 14 Jun transfer",
      "dayGroup": "Sun 14 Jun",
      "color": "#4f46e5",
      "dashArray": "8 8",
      "names": [
        "Homm Stay Nagi Shijo Kyoto By Banyan Group",
        "Kyoto Station",
        "CANDEO HOTELS Osaka The Tower",
        "Dotonbori",
        "Shinsaibashi-suji Shopping Street"
      ]
    },
    {
      "label": "Mon 15 Jun flow",
      "dayGroup": "Mon 15 Jun",
      "color": "#ea580c",
      "names": [
        "CANDEO HOTELS Osaka The Tower",
        "Universal Studios Japan",
        "CANDEO HOTELS Osaka The Tower"
      ]
    },
    {
      "label": "Tue 16 Jun flow",
      "dayGroup": "Tue 16 Jun",
      "color": "#0ea5a4",
      "names": [
        "CANDEO HOTELS Osaka The Tower",
        "Shinsekai / Tsutenkaku",
        "Umeda Sky Building",
        "Dotonbori",
        "CANDEO HOTELS Osaka The Tower"
      ]
    },
    {
      "label": "Wed 17 Jun transfer",
      "dayGroup": "Wed 17 Jun",
      "color": "#9333ea",
      "dashArray": "8 8",
      "names": [
        "CANDEO HOTELS Osaka The Tower",
        "Shin-Osaka Station",
        "Hiroshima Station",
        "Hilton Hiroshima",
        "Peace Memorial Park",
        "Atomic Bomb Dome"
      ]
    },
    {
      "label": "Thu 18 Jun transfer",
      "dayGroup": "Thu 18 Jun",
      "color": "#dc2626",
      "dashArray": "8 8",
      "names": [
        "Hilton Hiroshima",
        "Hiroshima Peace Memorial Museum",
        "Atomic Bomb Dome",
        "Hiroshima Station",
        "Shinjuku Prince Hotel"
      ]
    },
    {
      "label": "Fri 19 Jun flow",
      "dayGroup": "Fri 19 Jun",
      "color": "#256f3a",
      "names": [
        "Shinjuku Prince Hotel",
        "Tokyo Metropolitan Government Observatory",
        "Shinjuku Gyoen",
        "Omoide Yokocho / Golden Gai",
        "Shinjuku Prince Hotel"
      ]
    },
    {
      "label": "Sat 20 Jun flow",
      "dayGroup": "Sat 20 Jun",
      "color": "#c026d3",
      "names": [
        "Shinjuku Prince Hotel",
        "Tokyo DisneySea",
        "Shinjuku Prince Hotel"
      ]
    },
    {
      "label": "Sun 21 Jun flow",
      "dayGroup": "Sun 21 Jun",
      "color": "#ca8a04",
      "names": [
        "Shinjuku Prince Hotel",
        "Shinjuku Gyoen",
        "Tokyo Metropolitan Government Observatory",
        "Omoide Yokocho / Golden Gai",
        "Shinjuku Prince Hotel"
      ]
    },
    {
      "label": "Mon 22 Jun transfer",
      "dayGroup": "Mon 22 Jun",
      "color": "#334155",
      "dashArray": "8 8",
      "names": [
        "Shinjuku Prince Hotel",
        "Haneda Airport departure"
      ]
    }
  ]
}$json$::jsonb
)
on conflict (slug) do update
set
  title = excluded.title,
  owner_id = excluded.owner_id,
  data = excluded.data,
  updated_at = now();

-- Optional: give the Japan map its own shared edit link token.
-- Replace PASTE_A_LONG_RANDOM_TOKEN_HERE with your real token before running.
update public.trips
set shared_edit_token_hash = encode(
  extensions.digest('PASTE_A_LONG_RANDOM_TOKEN_HERE', 'sha256'),
  'hex'
)
where slug = 'japan-2026';
