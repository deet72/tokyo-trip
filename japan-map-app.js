const SUPABASE_URL = "https://gcxhgbnjqduaudljzykn.supabase.co";
    const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjeGhnYm5qcWR1YXVkbGp6eWtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4NzE2MTQsImV4cCI6MjA5NTQ0NzYxNH0.9j9SKN3ttwr2MtJiOBH1RKNsRqVfkbb7BMBIguw3n7I";
    const TRIP_OWNER_ID = "93a8c093-517d-4155-b2da-c73f40b5db4e";
    const TRIP_SLUG = "japan-2026";
    const TRIP_TITLE = "Japan Trip 2026";
    const TRIP_EDIT_QUERY_PARAM = "edit";

    const defaultDayGroups = [
      { key: "Thu 4 Jun", label: "Thu 4 Jun - overnight flight to Japan", color: "#64748b" },
      { key: "Fri 5 Jun", label: "Fri 5 Jun - Tokyo arrival, Zojo-ji + Ginza", color: "#ef4444" },
      { key: "Sat 6 Jun", label: "Sat 6 Jun - Harajuku, Shibuya + cats", color: "#2563eb" },
      { key: "Sun 7 Jun", label: "Sun 7 Jun - Mt Fuji day trip", color: "#16a34a" },
      { key: "Mon 8 Jun", label: "Mon 8 Jun - Asakusa + Akihabara", color: "#7c3aed" },
      { key: "Tue 9 Jun", label: "Tue 9 Jun - teamLab + Odaiba", color: "#f97316" },
      { key: "Wed 10 Jun", label: "Wed 10 Jun - Tokyo to Kyoto, 10:21-12:32", color: "#0f766e" },
      { key: "Thu 11 Jun", label: "Thu 11 Jun - Kyoto east side + tea ceremony", color: "#b45309" },
      { key: "Fri 12 Jun", label: "Fri 12 Jun - Hozugawa boat ride + Arashiyama", color: "#0891b2" },
      { key: "Sat 13 Jun", label: "Sat 13 Jun - free Kyoto day", color: "#be123c" },
      { key: "Sun 14 Jun", label: "Sun 14 Jun - Kyoto to Osaka", color: "#4f46e5" },
      { key: "Mon 15 Jun", label: "Mon 15 Jun - Universal Studios Japan", color: "#ea580c" },
      { key: "Tue 16 Jun", label: "Tue 16 Jun - free Osaka day", color: "#0ea5a4" },
      { key: "Wed 17 Jun", label: "Wed 17 Jun - Osaka to Hiroshima", color: "#9333ea" },
      { key: "Thu 18 Jun", label: "Thu 18 Jun - Hiroshima then back to Tokyo", color: "#dc2626" },
      { key: "Fri 19 Jun", label: "Fri 19 Jun - easy Shinjuku day", color: "#256f3a" },
      { key: "Sat 20 Jun", label: "Sat 20 Jun - DisneySea", color: "#c026d3" },
      { key: "Sun 21 Jun", label: "Sun 21 Jun - final Tokyo day", color: "#ca8a04" },
      { key: "Mon 22 Jun", label: "Mon 22 Jun - fly home", color: "#334155" }
    ];

    const defaultDayMeta = Object.fromEntries(defaultDayGroups.map(day => [day.key, day]));

    const statusOrder = ["Booked / fixed", "Planned highlight", "Suggested add-on"];
    const statusColors = {
      "Booked / fixed": "#1d4ed8",
      "Planned highlight": "#d97706",
      "Suggested add-on": "#6d28d9"
    };

    const categoryOrder = [
      "Hotels / stays",
      "Travel / stations",
      "Experiences / tickets",
      "Cafes & food",
      "Culture & heritage",
      "Shopping / city areas",
      "Views / scenic",
      "Theme parks"
    ];

    const categoryColors = {
      "Hotels / stays": "#0f172a",
      "Travel / stations": "#475569",
      "Experiences / tickets": "#2563eb",
      "Cafes & food": "#f59e0b",
      "Culture & heritage": "#16a34a",
      "Shopping / city areas": "#ef4444",
      "Views / scenic": "#0891b2",
      "Theme parks": "#db2777"
    };

    const defaultPlaces = [
      {
        name: "Overnight flight to Haneda",
        dayGroups: ["Thu 4 Jun"],
        dayLabel: "Thu 4 Jun",
        status: "Booked / fixed",
        category: "Travel / stations",
        lat: 35.5494,
        lng: 139.7798,
        search: "Haneda Airport Tokyo",
        notes: "Pinned on Haneda so the map stays Japan-focused. This represents the Dublin to Frankfurt to overnight Japan flight."
      },
      {
        name: "Haneda Airport arrival",
        dayGroups: ["Fri 5 Jun"],
        dayLabel: "Fri 5 Jun",
        status: "Booked / fixed",
        category: "Travel / stations",
        lat: 35.5494,
        lng: 139.7798,
        search: "Haneda Airport Tokyo",
        notes: "Arrival into Tokyo after the overnight flight. Useful first pin for luggage, SIM, Suica and train timing."
      },
      {
        name: "Hotel Villa Fontaine Grand Tokyo-Shiodome",
        dayGroups: ["Fri 5 Jun", "Sat 6 Jun", "Sun 7 Jun", "Mon 8 Jun", "Tue 9 Jun", "Wed 10 Jun"],
        dayLabel: "Stay: Fri 5-Wed 10 Jun checkout",
        status: "Booked / fixed",
        category: "Hotels / stays",
        lat: 35.6643,
        lng: 139.7607,
        search: "Hotel Villa Fontaine Grand Tokyo-Shiodome",
        notes: "First Tokyo base. Leave luggage on arrival day if the room is not ready yet."
      },
      {
        name: "Hamarikyu Gardens",
        dayGroups: ["Fri 5 Jun"],
        dayLabel: "Fri 5 Jun",
        status: "Suggested add-on",
        category: "Views / scenic",
        lat: 35.66,
        lng: 139.7633,
        search: "Hamarikyu Gardens Tokyo",
        notes: "Very easy low-energy add-on near the Shiodome hotel if the first afternoon needs to stay light."
      },
      {
        name: "Zojo-ji Temple",
        dayGroups: ["Fri 5 Jun"],
        dayLabel: "Fri 5 Jun",
        status: "Planned highlight",
        category: "Culture & heritage",
        lat: 35.6581,
        lng: 139.7486,
        search: "Zojoji Temple 4-7-35 Shiba-koen Minato City Tokyo",
        notes: "Very easy arrival-day temple stop from Shiodome, and great with the Tokyo Tower backdrop."
      },
      {
        name: "Ginza",
        dayGroups: ["Fri 5 Jun"],
        dayLabel: "Fri 5 Jun",
        status: "Planned highlight",
        category: "Shopping / city areas",
        lat: 35.6719,
        lng: 139.765,
        search: "Ginza Tokyo",
        notes: "Easy arrival afternoon area for wandering, shopping and working in Age.3."
      },
      {
        name: "Age.3 Ginza",
        dayGroups: ["Fri 5 Jun", "Mon 8 Jun"],
        dayLabel: "Fri 5 Jun or Mon 8 Jun",
        status: "Planned highlight",
        category: "Cafes & food",
        lat: 35.674,
        lng: 139.7715,
        search: "Age.3 Ginza 1-24-11 Ginza Chuo Tokyo",
        notes: "Your cream-sandwich stop. It fits best on arrival day or as a detour if you loop back through central Tokyo."
      },
      {
        name: "UNIQLO Ginza",
        dayGroups: ["Fri 5 Jun"],
        dayLabel: "Fri 5 Jun",
        status: "Planned highlight",
        category: "Shopping / city areas",
        lat: 35.6708,
        lng: 139.7637,
        search: "UNIQLO Ginza 6-9-5 Ginza Chuo City Tokyo",
        notes: "Makes perfect sense with your Ginza wander and is one of the biggest Uniqlo stores in Tokyo."
      },
      {
        name: "Matcha ice cream (EXITMELSA)",
        dayGroups: ["Fri 5 Jun"],
        dayLabel: "Fri 5 Jun",
        status: "Planned highlight",
        category: "Cafes & food",
        lat: 35.6712,
        lng: 139.7636,
        search: "東京都中央区銀座5-7-10 EXITMELSA 1F",
        notes: "Matcha ice cream stop in Ginza at EXITMELSA, 1F. Easy to slot into the same wander as UNIQLO Ginza and Age.3."
      },
      {
        name: "Shibuya Crossing",
        dayGroups: ["Sat 6 Jun"],
        dayLabel: "Sat 6 Jun",
        status: "Planned highlight",
        category: "Shopping / city areas",
        lat: 35.6595,
        lng: 139.7005,
        search: "Shibuya Crossing Tokyo",
        notes: "Moved onto Saturday so your main Shibuya block sits together."
      },
      {
        name: "Shibuya Sky",
        dayGroups: ["Sat 6 Jun"],
        dayLabel: "Sat 6 Jun at 18:40",
        status: "Booked / fixed",
        category: "Views / scenic",
        lat: 35.6585,
        lng: 139.702,
        search: "Shibuya Sky Tokyo",
        notes: "Booked for 18:40 on Saturday 6 June, which is a great sunset / early-evening time."
      },
      {
        name: "MEGA Don Quijote Shibuya",
        dayGroups: ["Sat 6 Jun"],
        dayLabel: "Sat 6 Jun",
        status: "Planned highlight",
        category: "Shopping / city areas",
        lat: 35.6605,
        lng: 139.6973,
        search: "MEGA Don Quijote Shibuya",
        notes: "Good Shibuya-night snack, souvenir and general chaos stop."
      },
      {
        name: "Sweet Check",
        dayGroups: ["Sat 6 Jun"],
        dayLabel: "Sat 6 Jun",
        status: "Planned highlight",
        category: "Cafes & food",
        lat: 35.6658,
        lng: 139.7138,
        search: "Sweet Check 3-18-5 Minami-Aoyama Minato-ku Tokyo",
        notes: "Easy Omotesando / Aoyama stop to pair with Harajuku before you continue toward Shibuya."
      },
      {
        name: "Cafe Reissue",
        dayGroups: ["Sat 6 Jun"],
        dayLabel: "Sat 6 Jun",
        status: "Planned highlight",
        category: "Cafes & food",
        lat: 35.6694,
        lng: 139.707,
        search: "Cafe Reissue 3 Chome-25-7 Jingumae Shibuya Tokyo",
        notes: "3D latte art cafe. Earlier is better if you want to dodge some queue time."
      },
      {
        name: "Takeshita Street / Harajuku",
        dayGroups: ["Sat 6 Jun"],
        dayLabel: "Sat 6 Jun",
        status: "Planned highlight",
        category: "Shopping / city areas",
        lat: 35.6717,
        lng: 139.7035,
        search: "Takeshita Street Harajuku Tokyo",
        notes: "Shopping, snacks, crepes, character stores and general Harajuku energy."
      },
      {
        name: "Cat Cafe MoCHA Harajuku",
        dayGroups: ["Sat 6 Jun"],
        dayLabel: "Sat 6 Jun",
        status: "Planned highlight",
        category: "Cafes & food",
        lat: 35.671,
        lng: 139.7049,
        search: "Cat Cafe MoCHA Harajuku Tokyo",
        notes: "Pinned as the best current match for your 'Cat On' coffee-place note. Swap this if you meant a different cat cafe."
      },
      {
        name: "Meiji Shrine",
        dayGroups: ["Sat 6 Jun"],
        dayLabel: "Sat 6 Jun",
        status: "Suggested add-on",
        category: "Culture & heritage",
        lat: 35.6764,
        lng: 139.6993,
        search: "Meiji Shrine Tokyo",
        notes: "Strong add-on beside Harajuku if you want a calm contrast to the busier shopping streets."
      },
      {
        name: "Gotokuji Temple",
        dayGroups: ["Sat 6 Jun"],
        dayLabel: "Sat 6 Jun",
        status: "Planned highlight",
        category: "Culture & heritage",
        lat: 35.6531,
        lng: 139.6475,
        search: "Gotokuji Temple Tokyo",
        notes: "Cat temple day. It is a bit west of the main tourist core, so treat it as a deliberate side trip."
      },
      {
        name: "BAM BI COFFEE",
        dayGroups: ["Sat 6 Jun"],
        dayLabel: "Sat 6 Jun",
        status: "Planned highlight",
        category: "Cafes & food",
        lat: 35.7007,
        lng: 139.7054,
        search: "BAM BI COFFEE Tokyo",
        notes: "Pairs well with a Shin-Okubo or Shinjuku evening."
      },
      {
        name: "Omoide Yokocho / Golden Gai",
        dayGroups: ["Sat 6 Jun", "Fri 19 Jun", "Sun 21 Jun"],
        dayLabel: "Sat 6 Jun or final Tokyo nights",
        status: "Suggested add-on",
        category: "Cafes & food",
        lat: 35.6939,
        lng: 139.6995,
        search: "Omoide Yokocho Tokyo",
        notes: "Easy atmospheric night stop from either Tokyo stay if you want lantern-lit alleys and late food."
      },
      {
        name: "Mt Fuji day trip meeting point",
        dayGroups: ["Sun 7 Jun"],
        dayLabel: "Sun 7 Jun",
        status: "Booked / fixed",
        category: "Experiences / tickets",
        lat: 35.6896,
        lng: 139.7005,
        search: "Mt Fuji tour meeting point Shinjuku Tokyo",
        notes: "Pinned near Shinjuku as a practical placeholder for the 08:30 meeting until the exact booking point is confirmed."
      },
      {
        name: "Senso-ji Temple",
        dayGroups: ["Mon 8 Jun"],
        dayLabel: "Mon 8 Jun",
        status: "Planned highlight",
        category: "Culture & heritage",
        lat: 35.7148,
        lng: 139.7967,
        search: "Senso-ji Temple Tokyo",
        notes: "Good early stop before the area gets busier."
      },
      {
        name: "Nakamise-dori",
        dayGroups: ["Mon 8 Jun"],
        dayLabel: "Mon 8 Jun",
        status: "Suggested add-on",
        category: "Cafes & food",
        lat: 35.7128,
        lng: 139.7965,
        search: "Nakamise Dori Asakusa Tokyo",
        notes: "Makes Senso-ji feel like a fuller half-day with snacks and souvenir browsing on the approach."
      },
      {
        name: "Mochinyan-yaki",
        dayGroups: ["Mon 8 Jun"],
        dayLabel: "Mon 8 Jun",
        status: "Planned highlight",
        category: "Cafes & food",
        lat: 35.7136,
        lng: 139.7962,
        search: "Mochinyan-yaki 2-3-25 Asakusa Taito City Tokyo",
        notes: "Chewy cat-shaped pancake stop in Asakusa, easy to do while you are around Senso-ji and Nakamise."
      },
      {
        name: "Tokyo Skytree",
        dayGroups: ["Mon 8 Jun"],
        dayLabel: "Mon 8 Jun",
        status: "Planned highlight",
        category: "Views / scenic",
        lat: 35.7101,
        lng: 139.8107,
        search: "Tokyo Skytree",
        notes: "Makes sense as the next east-Tokyo stop after Asakusa before heading onward."
      },
      {
        name: "Ueno Zoo",
        dayGroups: ["Mon 8 Jun"],
        dayLabel: "Mon 8 Jun",
        status: "Planned highlight",
        category: "Culture & heritage",
        lat: 35.7168,
        lng: 139.7714,
        search: "Ueno Zoological Gardens 9-83 Ueno Park Taito City Tokyo",
        notes: "Good add-on if you want to keep Monday focused on the east side of Tokyo before Akihabara."
      },
      {
        name: "Akihabara",
        dayGroups: ["Mon 8 Jun"],
        dayLabel: "Mon 8 Jun",
        status: "Planned highlight",
        category: "Shopping / city areas",
        lat: 35.6997,
        lng: 139.7714,
        search: "Akihabara Tokyo",
        notes: "Best fit for vending-machine wandering, arcades, gachapon, anime and electronics."
      },
      {
        name: "Tokyo Station / Character Street",
        dayGroups: ["Mon 8 Jun", "Wed 10 Jun"],
        dayLabel: "Mon 8 Jun or Wed 10 Jun",
        status: "Suggested add-on",
        category: "Shopping / city areas",
        lat: 35.6812,
        lng: 139.7671,
        search: "Tokyo Character Street Tokyo Station",
        notes: "Useful suggestion for character shopping and also handy train-station familiarity before your 10:21 train to Kyoto."
      },
      {
        name: "teamLab Planets TOKYO",
        dayGroups: ["Tue 9 Jun"],
        dayLabel: "Tue 9 Jun at 09:30",
        status: "Booked / fixed",
        category: "Experiences / tickets",
        lat: 35.6491,
        lng: 139.7898,
        search: "teamLab Planets Tokyo",
        notes: "Booked for 09:30. Clothing that can roll above the knee makes the water rooms easier."
      },
      {
        name: "Toyosu Market / waterfront",
        dayGroups: ["Tue 9 Jun"],
        dayLabel: "Tue 9 Jun",
        status: "Suggested add-on",
        category: "Cafes & food",
        lat: 35.6468,
        lng: 139.7847,
        search: "Toyosu Market Tokyo",
        notes: "A very sensible food stop right after teamLab if you want lunch nearby."
      },
      {
        name: "DiverCity Tokyo Plaza / Gundam",
        dayGroups: ["Tue 9 Jun"],
        dayLabel: "Tue 9 Jun",
        status: "Suggested add-on",
        category: "Shopping / city areas",
        lat: 35.6252,
        lng: 139.7757,
        search: "DiverCity Tokyo Plaza Gundam",
        notes: "Good Odaiba shopping anchor with the giant Gundam statue."
      },
      {
        name: "Odaiba Seaside Park",
        dayGroups: ["Tue 9 Jun"],
        dayLabel: "Tue 9 Jun",
        status: "Suggested add-on",
        category: "Views / scenic",
        lat: 35.6299,
        lng: 139.7765,
        search: "Odaiba Seaside Park Tokyo",
        notes: "Worth it if the weather is kind and you want a breather between indoor stops."
      },
      {
        name: "Tokyo Tower",
        dayGroups: ["Tue 9 Jun"],
        dayLabel: "Tue 9 Jun",
        status: "Suggested add-on",
        category: "Views / scenic",
        lat: 35.6586,
        lng: 139.7454,
        search: "Tokyo Tower",
        notes: "Nice last-night-of-the-first-stay option because it is not too awkward from Shiodome."
      },
      {
        name: "Tokyo Station",
        dayGroups: ["Wed 10 Jun"],
        dayLabel: "Wed 10 Jun - 10:21 departure",
        status: "Booked / fixed",
        category: "Travel / stations",
        lat: 35.6812,
        lng: 139.7671,
        search: "Tokyo Station",
        notes: "Train to Kyoto departs Tokyo Station at 10:21."
      },
      {
        name: "Kyoto Station",
        dayGroups: ["Wed 10 Jun", "Sun 14 Jun"],
        dayLabel: "Wed 10 Jun - 12:32 arrival or Sun 14 Jun",
        status: "Booked / fixed",
        category: "Travel / stations",
        lat: 34.9855,
        lng: 135.7585,
        search: "Kyoto Station",
        notes: "Arrive from Tokyo at 12:32 on Wednesday 10 June, then later use it again for the Osaka transfer on Sunday 14 June."
      },
      {
        name: "Homm Stay Nagi Shijo Kyoto By Banyan Group",
        dayGroups: ["Wed 10 Jun", "Thu 11 Jun", "Fri 12 Jun", "Sat 13 Jun", "Sun 14 Jun"],
        dayLabel: "Stay: Wed 10-Sun 14 Jun checkout",
        status: "Booked / fixed",
        category: "Hotels / stays",
        lat: 35.0053,
        lng: 135.7537,
        search: "Homm Stay Nagi Shijo Kyoto By Banyan Group",
        notes: "Kyoto base near the Shijo area, mapped close to the hotel listing for easy city-centre routing."
      },
      {
        name: "Nishiki Market",
        dayGroups: ["Wed 10 Jun", "Sat 13 Jun"],
        dayLabel: "Wed 10 Jun or Sat 13 Jun",
        status: "Suggested add-on",
        category: "Cafes & food",
        lat: 35.005,
        lng: 135.7643,
        search: "Nishiki Market Kyoto",
        notes: "Good easy first-evening or last-full-day Kyoto stop for snacks without a big detour."
      },
      {
        name: "Fushimi Inari Taisha",
        dayGroups: ["Thu 11 Jun"],
        dayLabel: "Thu 11 Jun",
        status: "Suggested add-on",
        category: "Culture & heritage",
        lat: 34.9671,
        lng: 135.7727,
        search: "Fushimi Inari Taisha Kyoto",
        notes: "A strong early-morning Kyoto add-on before your 13:00 tea ceremony."
      },
      {
        name: "Tea ceremony - Kyoto Maikoya Gion Kiyomizu",
        dayGroups: ["Thu 11 Jun"],
        dayLabel: "Thu 11 Jun at 13:00",
        status: "Booked / fixed",
        category: "Experiences / tickets",
        lat: 34.9976,
        lng: 135.7741,
        search: "Kyoto Geisha Show & Experience GION MAIKOYA 100 Rokurocho Higashiyama Ward Kyoto 605-0813 Japan",
        notes: "Exact tea-ceremony venue: 100 Rokurocho, Higashiyama Ward, Kyoto 605-0813."
      },
      {
        name: "Gion / Yasaka Shrine",
        dayGroups: ["Thu 11 Jun", "Sat 13 Jun"],
        dayLabel: "Thu 11 Jun or Sat 13 Jun",
        status: "Suggested add-on",
        category: "Culture & heritage",
        lat: 35.0037,
        lng: 135.7788,
        search: "Yasaka Shrine Kyoto",
        notes: "Fits beautifully before or after the tea ceremony and also works for your free Kyoto day."
      },
      {
        name: "Hozugawa River Boat Ride (Hozugawa Kudari)",
        dayGroups: ["Fri 12 Jun"],
        dayLabel: "Fri 12 Jun at 10:00",
        status: "Booked / fixed",
        category: "Experiences / tickets",
        lat: 35.0282,
        lng: 135.5908,
        search: "Hozugawa River Boat Ride Hozugawa Kudari Shimonakajima-2 Hozucho Kameoka Kyoto 621-0005 Japan",
        notes: "Exact boat-ride departure: Shimonakajima-2, Hozucho, Kameoka, Kyoto 621-0005."
      },
      {
        name: "Togetsukyo Bridge",
        dayGroups: ["Fri 12 Jun"],
        dayLabel: "Fri 12 Jun",
        status: "Suggested add-on",
        category: "Views / scenic",
        lat: 35.0118,
        lng: 135.6777,
        search: "Togetsukyo Bridge Kyoto",
        notes: "An easy visual anchor if your boat trip is indeed in or near Arashiyama."
      },
      {
        name: "Arashiyama Bamboo Grove",
        dayGroups: ["Fri 12 Jun"],
        dayLabel: "Fri 12 Jun",
        status: "Suggested add-on",
        category: "Views / scenic",
        lat: 35.017,
        lng: 135.6713,
        search: "Arashiyama Bamboo Grove Kyoto",
        notes: "Makes the Arashiyama half-day feel more complete if your schedule has room."
      },
      {
        name: "Kiyomizu-dera",
        dayGroups: ["Sat 13 Jun"],
        dayLabel: "Sat 13 Jun",
        status: "Suggested add-on",
        category: "Culture & heritage",
        lat: 34.9948,
        lng: 135.785,
        search: "Kiyomizu-dera Kyoto",
        notes: "Best large-scale suggestion for the free Kyoto day if you want one classic east-Kyoto block."
      },
      {
        name: "CANDEO HOTELS Osaka The Tower",
        dayGroups: ["Sun 14 Jun", "Mon 15 Jun", "Tue 16 Jun", "Wed 17 Jun"],
        dayLabel: "Stay: Sun 14-Wed 17 Jun checkout",
        status: "Booked / fixed",
        category: "Hotels / stays",
        lat: 34.695368,
        lng: 135.500674,
        search: "CANDEO HOTELS Osaka The Tower 1-1-27 Dojimahama Kita-ku Osaka 530-0004 Japan",
        notes: "Exact Osaka hotel: 1-1-27 Dojimahama, Kita-ku, Osaka 530-0004. This puts your base on the Umeda / Dojimahama side rather than Namba."
      },
      {
        name: "Dotonbori",
        dayGroups: ["Sun 14 Jun", "Tue 16 Jun"],
        dayLabel: "Sun 14 Jun or Tue 16 Jun",
        status: "Suggested add-on",
        category: "Shopping / city areas",
        lat: 34.6687,
        lng: 135.5019,
        search: "Dotonbori Osaka",
        notes: "Best first-night Osaka suggestion if you want the classic neon food-street energy."
      },
      {
        name: "Shinsaibashi-suji Shopping Street",
        dayGroups: ["Sun 14 Jun", "Tue 16 Jun"],
        dayLabel: "Sun 14 Jun or Tue 16 Jun",
        status: "Suggested add-on",
        category: "Shopping / city areas",
        lat: 34.6731,
        lng: 135.5011,
        search: "Shinsaibashi-suji Shopping Street Osaka",
        notes: "Strong add-on for fashion and general shopping, and easy to pair with Dotonbori."
      },
      {
        name: "Universal Studios Japan",
        dayGroups: ["Mon 15 Jun"],
        dayLabel: "Mon 15 Jun",
        status: "Booked / fixed",
        category: "Theme parks",
        lat: 34.6654,
        lng: 135.4323,
        search: "Universal Studios Japan",
        notes: "Full theme-park day."
      },
      {
        name: "Shinsekai / Tsutenkaku",
        dayGroups: ["Tue 16 Jun"],
        dayLabel: "Tue 16 Jun",
        status: "Suggested add-on",
        category: "Shopping / city areas",
        lat: 34.6525,
        lng: 135.5063,
        search: "Shinsekai Osaka",
        notes: "Good free-day Osaka suggestion if you want a more retro, old-school city feel."
      },
      {
        name: "Umeda Sky Building",
        dayGroups: ["Tue 16 Jun"],
        dayLabel: "Tue 16 Jun",
        status: "Suggested add-on",
        category: "Views / scenic",
        lat: 34.7053,
        lng: 135.4894,
        search: "Umeda Sky Building Osaka",
        notes: "Best higher-view Osaka suggestion if you want one skyline moment outside Tokyo."
      },
      {
        name: "Shin-Osaka Station",
        dayGroups: ["Wed 17 Jun"],
        dayLabel: "Wed 17 Jun",
        status: "Booked / fixed",
        category: "Travel / stations",
        lat: 34.7336,
        lng: 135.5006,
        search: "Shin-Osaka Station",
        notes: "Shinkansen transfer point for Hiroshima."
      },
      {
        name: "Hiroshima Station",
        dayGroups: ["Wed 17 Jun", "Thu 18 Jun"],
        dayLabel: "Wed 17 Jun or Thu 18 Jun",
        status: "Booked / fixed",
        category: "Travel / stations",
        lat: 34.3978,
        lng: 132.4757,
        search: "Hiroshima Station",
        notes: "Arrival point from Osaka and departure point for the evening train back to Tokyo."
      },
      {
        name: "Hilton Hiroshima",
        dayGroups: ["Wed 17 Jun", "Thu 18 Jun"],
        dayLabel: "Stay: Wed 17-Thu 18 Jun checkout",
        status: "Booked / fixed",
        category: "Hotels / stays",
        lat: 34.3869,
        lng: 132.4699,
        search: "Hilton Hiroshima",
        notes: "One-night Hiroshima base."
      },
      {
        name: "Peace Memorial Park",
        dayGroups: ["Wed 17 Jun", "Thu 18 Jun"],
        dayLabel: "Wed 17 Jun or Thu 18 Jun",
        status: "Suggested add-on",
        category: "Culture & heritage",
        lat: 34.3928,
        lng: 132.4523,
        search: "Peace Memorial Park Hiroshima",
        notes: "Strong Hiroshima suggestion because it clusters several of the city's core peace-history sites in one area."
      },
      {
        name: "Atomic Bomb Dome",
        dayGroups: ["Wed 17 Jun", "Thu 18 Jun"],
        dayLabel: "Wed 17 Jun or Thu 18 Jun",
        status: "Suggested add-on",
        category: "Culture & heritage",
        lat: 34.3955,
        lng: 132.4536,
        search: "Atomic Bomb Dome Hiroshima",
        notes: "Easy to combine with the park and museum on a short Hiroshima stay."
      },
      {
        name: "Hiroshima Peace Memorial Museum",
        dayGroups: ["Thu 18 Jun"],
        dayLabel: "Thu 18 Jun",
        status: "Suggested add-on",
        category: "Culture & heritage",
        lat: 34.3914,
        lng: 132.4519,
        search: "Hiroshima Peace Memorial Museum",
        notes: "Best fit on the morning of the return-to-Tokyo day if you want one focused Hiroshima museum stop."
      },
      {
        name: "Miyajima / Itsukushima Shrine",
        dayGroups: ["Thu 18 Jun"],
        dayLabel: "Thu 18 Jun",
        status: "Suggested add-on",
        category: "Views / scenic",
        lat: 34.2959,
        lng: 132.3199,
        search: "Itsukushima Shrine Miyajima",
        notes: "Beautiful but bigger-time-commitment Hiroshima add-on. Best only if you want to build the whole day around it before the evening train."
      },
      {
        name: "Shinjuku Prince Hotel",
        dayGroups: ["Thu 18 Jun", "Fri 19 Jun", "Sat 20 Jun", "Sun 21 Jun", "Mon 22 Jun"],
        dayLabel: "Stay: Thu 18-Mon 22 Jun checkout",
        status: "Booked / fixed",
        category: "Hotels / stays",
        lat: 35.6948,
        lng: 139.7006,
        search: "Shinjuku Prince Hotel Tokyo",
        notes: "Final Tokyo base."
      },
      {
        name: "Tokyo Metropolitan Government Observatory",
        dayGroups: ["Fri 19 Jun", "Sun 21 Jun"],
        dayLabel: "Fri 19 Jun or Sun 21 Jun",
        status: "Suggested add-on",
        category: "Views / scenic",
        lat: 35.6896,
        lng: 139.6917,
        search: "Tokyo Metropolitan Government Building Observatory",
        notes: "Great easy Shinjuku suggestion because it is close, free and gives you another skyline angle."
      },
      {
        name: "Shinjuku Gyoen",
        dayGroups: ["Fri 19 Jun", "Sun 21 Jun"],
        dayLabel: "Fri 19 Jun or Sun 21 Jun",
        status: "Suggested add-on",
        category: "Views / scenic",
        lat: 35.6852,
        lng: 139.71,
        search: "Shinjuku Gyoen",
        notes: "Very good slower final-Tokyo suggestion if you want a reset between heavier city days."
      },
      {
        name: "Tokyo DisneySea",
        dayGroups: ["Sat 20 Jun"],
        dayLabel: "Sat 20 Jun",
        status: "Booked / fixed",
        category: "Theme parks",
        lat: 35.6266,
        lng: 139.8857,
        search: "Tokyo DisneySea",
        notes: "Full DisneySea day."
      },
      {
        name: "Haneda Airport departure",
        dayGroups: ["Mon 22 Jun"],
        dayLabel: "Mon 22 Jun",
        status: "Booked / fixed",
        category: "Travel / stations",
        lat: 35.5494,
        lng: 139.7798,
        search: "Haneda Airport Tokyo",
        notes: "Flight home via Frankfurt back to Dublin."
      }
    ];

    const defaultRoutes = [
      {
        label: "Fri 5 Jun flow",
        dayGroup: "Fri 5 Jun",
        color: defaultDayMeta["Fri 5 Jun"].color,
        names: [
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
        label: "Sat 6 Jun flow",
        dayGroup: "Sat 6 Jun",
        color: defaultDayMeta["Sat 6 Jun"].color,
        names: [
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
        label: "Sun 7 Jun flow",
        dayGroup: "Sun 7 Jun",
        color: defaultDayMeta["Sun 7 Jun"].color,
        names: [
          "Hotel Villa Fontaine Grand Tokyo-Shiodome",
          "Mt Fuji day trip meeting point",
          "Hotel Villa Fontaine Grand Tokyo-Shiodome"
        ]
      },
      {
        label: "Mon 8 Jun flow",
        dayGroup: "Mon 8 Jun",
        color: defaultDayMeta["Mon 8 Jun"].color,
        names: [
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
        label: "Tue 9 Jun flow",
        dayGroup: "Tue 9 Jun",
        color: defaultDayMeta["Tue 9 Jun"].color,
        names: [
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
        label: "Wed 10 Jun transfer (10:21-12:32)",
        dayGroup: "Wed 10 Jun",
        color: defaultDayMeta["Wed 10 Jun"].color,
        dashArray: "8 8",
        names: [
          "Hotel Villa Fontaine Grand Tokyo-Shiodome",
          "Tokyo Station",
          "Kyoto Station",
          "Homm Stay Nagi Shijo Kyoto By Banyan Group",
          "Nishiki Market"
        ]
      },
      {
        label: "Thu 11 Jun flow",
        dayGroup: "Thu 11 Jun",
        color: defaultDayMeta["Thu 11 Jun"].color,
        names: [
          "Homm Stay Nagi Shijo Kyoto By Banyan Group",
          "Fushimi Inari Taisha",
          "Tea ceremony - Kyoto Maikoya Gion Kiyomizu",
          "Gion / Yasaka Shrine",
          "Homm Stay Nagi Shijo Kyoto By Banyan Group"
        ]
      },
      {
        label: "Fri 12 Jun flow",
        dayGroup: "Fri 12 Jun",
        color: defaultDayMeta["Fri 12 Jun"].color,
        names: [
          "Homm Stay Nagi Shijo Kyoto By Banyan Group",
          "Hozugawa River Boat Ride (Hozugawa Kudari)",
          "Togetsukyo Bridge",
          "Arashiyama Bamboo Grove",
          "Homm Stay Nagi Shijo Kyoto By Banyan Group"
        ]
      },
      {
        label: "Sat 13 Jun flow",
        dayGroup: "Sat 13 Jun",
        color: defaultDayMeta["Sat 13 Jun"].color,
        names: [
          "Homm Stay Nagi Shijo Kyoto By Banyan Group",
          "Kiyomizu-dera",
          "Gion / Yasaka Shrine",
          "Nishiki Market",
          "Homm Stay Nagi Shijo Kyoto By Banyan Group"
        ]
      },
      {
        label: "Sun 14 Jun transfer",
        dayGroup: "Sun 14 Jun",
        color: defaultDayMeta["Sun 14 Jun"].color,
        dashArray: "8 8",
        names: [
          "Homm Stay Nagi Shijo Kyoto By Banyan Group",
          "Kyoto Station",
          "CANDEO HOTELS Osaka The Tower",
          "Dotonbori",
          "Shinsaibashi-suji Shopping Street"
        ]
      },
      {
        label: "Mon 15 Jun flow",
        dayGroup: "Mon 15 Jun",
        color: defaultDayMeta["Mon 15 Jun"].color,
        names: [
          "CANDEO HOTELS Osaka The Tower",
          "Universal Studios Japan",
          "CANDEO HOTELS Osaka The Tower"
        ]
      },
      {
        label: "Tue 16 Jun flow",
        dayGroup: "Tue 16 Jun",
        color: defaultDayMeta["Tue 16 Jun"].color,
        names: [
          "CANDEO HOTELS Osaka The Tower",
          "Shinsekai / Tsutenkaku",
          "Umeda Sky Building",
          "Dotonbori",
          "CANDEO HOTELS Osaka The Tower"
        ]
      },
      {
        label: "Wed 17 Jun transfer",
        dayGroup: "Wed 17 Jun",
        color: defaultDayMeta["Wed 17 Jun"].color,
        dashArray: "8 8",
        names: [
          "CANDEO HOTELS Osaka The Tower",
          "Shin-Osaka Station",
          "Hiroshima Station",
          "Hilton Hiroshima",
          "Peace Memorial Park",
          "Atomic Bomb Dome"
        ]
      },
      {
        label: "Thu 18 Jun transfer",
        dayGroup: "Thu 18 Jun",
        color: defaultDayMeta["Thu 18 Jun"].color,
        dashArray: "8 8",
        names: [
          "Hilton Hiroshima",
          "Hiroshima Peace Memorial Museum",
          "Atomic Bomb Dome",
          "Hiroshima Station",
          "Shinjuku Prince Hotel"
        ]
      },
      {
        label: "Fri 19 Jun flow",
        dayGroup: "Fri 19 Jun",
        color: defaultDayMeta["Fri 19 Jun"].color,
        names: [
          "Shinjuku Prince Hotel",
          "Tokyo Metropolitan Government Observatory",
          "Shinjuku Gyoen",
          "Omoide Yokocho / Golden Gai",
          "Shinjuku Prince Hotel"
        ]
      },
      {
        label: "Sat 20 Jun flow",
        dayGroup: "Sat 20 Jun",
        color: defaultDayMeta["Sat 20 Jun"].color,
        names: [
          "Shinjuku Prince Hotel",
          "Tokyo DisneySea",
          "Shinjuku Prince Hotel"
        ]
      },
      {
        label: "Sun 21 Jun flow",
        dayGroup: "Sun 21 Jun",
        color: defaultDayMeta["Sun 21 Jun"].color,
        names: [
          "Shinjuku Prince Hotel",
          "Shinjuku Gyoen",
          "Tokyo Metropolitan Government Observatory",
          "Omoide Yokocho / Golden Gai",
          "Shinjuku Prince Hotel"
        ]
      },
      {
        label: "Mon 22 Jun transfer",
        dayGroup: "Mon 22 Jun",
        color: defaultDayMeta["Mon 22 Jun"].color,
        dashArray: "8 8",
        names: [
          "Shinjuku Prince Hotel",
          "Haneda Airport departure"
        ]
      }
    ];

    const defaultTripData = {
      dayGroups: defaultDayGroups,
      places: defaultPlaces,
      routes: defaultRoutes
    };

    let dayGroups = [];
    let dayMeta = {};
    let dayOrder = [];
    let stageSets = {};
    let places = [];
    let routes = [];
    let markers = [];
    let routeLines = [];
    let persistedTripData = JSON.parse(JSON.stringify(defaultTripData));
    let tripRecordId = null;
    let currentUser = null;
    let sourceLabel = "Bundled fallback data";
    const sharedEditToken = new URLSearchParams(window.location.search).get(TRIP_EDIT_QUERY_PARAM)?.trim() || "";
    let sharedEditTokenValid = false;

    const { createClient } = supabase;
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });

    const map = L.map("map").setView([35.8, 136.4], 6);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    let filterValues = {
      status: [...statusOrder],
      category: [...categoryOrder],
      day: []
    };

    const selected = {
      status: new Set(statusOrder),
      category: new Set(categoryOrder),
      day: new Set()
    };

    function deepClone(value) {
      return JSON.parse(JSON.stringify(value));
    }

    function escapeHtml(value) {
      return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
      }[char]));
    }

    function markerIcon(category, status) {
      return L.divIcon({
        className: "custom-pin",
        html: `
          <div class="pin-outer" style="background:${categoryColors[category] || "#6d28d9"}">
            <div class="pin-inner" style="background:${statusColors[status] || "#ffffff"}"></div>
          </div>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        popupAnchor: [0, -12]
      });
    }

    function renderList(items, title) {
      if (!items || !items.length) return "";
      const list = items.map(item => `<li>${escapeHtml(item)}</li>`).join("");
      return `
        <div class="popup-section">
          <div class="popup-section-title">${escapeHtml(title)}</div>
          <ul class="popup-list">${list}</ul>
        </div>
      `;
    }

    function buildStageSets() {
      return {
      "All trip": [...dayOrder],
      "Tokyo start": ["Thu 4 Jun", "Fri 5 Jun", "Sat 6 Jun", "Sun 7 Jun", "Mon 8 Jun", "Tue 9 Jun"],
      "Kyoto": ["Wed 10 Jun", "Thu 11 Jun", "Fri 12 Jun", "Sat 13 Jun"],
      "Osaka": ["Sun 14 Jun", "Mon 15 Jun", "Tue 16 Jun"],
      "Hiroshima": ["Wed 17 Jun", "Thu 18 Jun"],
      "Tokyo finish": ["Thu 18 Jun", "Fri 19 Jun", "Sat 20 Jun", "Sun 21 Jun", "Mon 22 Jun"]
    };
    }

    function currentTripData() {
      return {
        dayGroups: deepClone(dayGroups),
        places: deepClone(places),
        routes: deepClone(routes)
      };
    }

    function validateTripData(data) {
      const errors = [];

      if (!data || typeof data !== "object" || Array.isArray(data)) {
        return ["Trip data must be a JSON object."];
      }

      if (!Array.isArray(data.dayGroups)) errors.push("`dayGroups` must be an array.");
      if (!Array.isArray(data.places)) errors.push("`places` must be an array.");
      if (!Array.isArray(data.routes)) errors.push("`routes` must be an array.");
      if (errors.length) return errors;

      const dayKeys = new Set();
      data.dayGroups.forEach((day, index) => {
        if (!day || typeof day !== "object") {
          errors.push(`dayGroups[${index}] must be an object.`);
          return;
        }
        if (!day.key || typeof day.key !== "string") errors.push(`dayGroups[${index}].key must be a string.`);
        if (!day.label || typeof day.label !== "string") errors.push(`dayGroups[${index}].label must be a string.`);
        if (!day.color || typeof day.color !== "string") errors.push(`dayGroups[${index}].color must be a string.`);
        if (day.key && dayKeys.has(day.key)) errors.push(`Duplicate day key: ${day.key}`);
        if (day.key) dayKeys.add(day.key);
      });

      const placeNames = new Set();
      data.places.forEach((place, index) => {
        if (!place || typeof place !== "object") {
          errors.push(`places[${index}] must be an object.`);
          return;
        }
        ["name", "dayLabel", "status", "category", "search", "notes"].forEach(field => {
          if (!place[field] || typeof place[field] !== "string") {
            errors.push(`places[${index}].${field} must be a string.`);
          }
        });
        if (!Array.isArray(place.dayGroups)) errors.push(`places[${index}].dayGroups must be an array.`);
        if (!Number.isFinite(Number(place.lat))) errors.push(`places[${index}].lat must be a number.`);
        if (!Number.isFinite(Number(place.lng))) errors.push(`places[${index}].lng must be a number.`);
        if (place.status && !statusOrder.includes(place.status)) errors.push(`places[${index}].status must use a known status.`);
        if (place.category && !categoryOrder.includes(place.category)) errors.push(`places[${index}].category must use a known category.`);
        if (Array.isArray(place.dayGroups)) {
          place.dayGroups.forEach(dayKey => {
            if (!dayKeys.has(dayKey)) errors.push(`places[${index}] references unknown day key: ${dayKey}`);
          });
        }
        if (place.suggestions && !Array.isArray(place.suggestions)) {
          errors.push(`places[${index}].suggestions must be an array when present.`);
        }
        if (Array.isArray(place.suggestions)) {
          place.suggestions.forEach((item, itemIndex) => {
            if (typeof item !== "string") errors.push(`places[${index}].suggestions[${itemIndex}] must be a string.`);
          });
        }
        if (place.name && placeNames.has(place.name)) errors.push(`Duplicate place name: ${place.name}`);
        if (place.name) placeNames.add(place.name);
      });

      data.routes.forEach((route, index) => {
        if (!route || typeof route !== "object") {
          errors.push(`routes[${index}] must be an object.`);
          return;
        }
        if (!route.label || typeof route.label !== "string") errors.push(`routes[${index}].label must be a string.`);
        if (!route.dayGroup || typeof route.dayGroup !== "string") errors.push(`routes[${index}].dayGroup must be a string.`);
        if (!Array.isArray(route.names) || route.names.length < 2) errors.push(`routes[${index}].names must be an array with at least two place names.`);
        if (route.dayGroup && !dayKeys.has(route.dayGroup)) errors.push(`routes[${index}] references unknown day key: ${route.dayGroup}`);
        if (Array.isArray(route.names)) {
          route.names.forEach(name => {
            if (!placeNames.has(name)) errors.push(`routes[${index}] references unknown place: ${name}`);
          });
        }
      });

      return errors;
    }

    function rebuildDerivedState() {
      dayMeta = Object.fromEntries(dayGroups.map(day => [day.key, day]));
      dayOrder = dayGroups.map(day => day.key);
      stageSets = buildStageSets();
      filterValues = {
        status: [...statusOrder],
        category: [...categoryOrder],
        day: [...dayOrder]
      };
    }

    function reconcileSelections(resetFilters = false) {
      if (resetFilters || !selected.status.size) selected.status = new Set(filterValues.status);
      else selected.status = new Set([...selected.status].filter(value => filterValues.status.includes(value)));

      if (resetFilters || !selected.category.size) selected.category = new Set(filterValues.category);
      else selected.category = new Set([...selected.category].filter(value => filterValues.category.includes(value)));

      if (resetFilters || !selected.day.size) selected.day = new Set(filterValues.day);
      else selected.day = new Set([...selected.day].filter(value => filterValues.day.includes(value)));

      if (!selected.day.size) selected.day = new Set(filterValues.day);
      if (!selected.status.size) selected.status = new Set(filterValues.status);
      if (!selected.category.size) selected.category = new Set(filterValues.category);
    }

    function renderPopup(place) {
      const google = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.search)}`;
      return `
        <div class="popup-title">${escapeHtml(place.name)}</div>
        <div>${escapeHtml(place.notes)}</div>
        ${renderList(place.suggestions, "Good Nearby Ideas")}
        <div class="popup-tags">
          <span class="tag">${escapeHtml(place.dayLabel)}</span>
          <span class="tag">${escapeHtml(place.status)}</span>
          <span class="tag">${escapeHtml(place.category)}</span>
        </div>
        <a class="popup-link" href="${google}" target="_blank" rel="noopener">Open in Google Maps</a>
      `;
    }

    function rebuildMapLayers() {
      markers.forEach(marker => {
        if (map.hasLayer(marker)) map.removeLayer(marker);
      });
      routeLines.forEach(line => {
        if (map.hasLayer(line)) map.removeLayer(line);
      });

      const byName = Object.fromEntries(places.map(place => [place.name, place]));

      markers = places.map(place => {
        const marker = L.marker([Number(place.lat), Number(place.lng)], {
          icon: markerIcon(place.category, place.status)
        }).bindPopup(renderPopup(place));
        marker.place = place;
        return marker;
      });

      routeLines = routes
        .map(route => {
          const coords = route.names
            .filter(name => byName[name])
            .map(name => [Number(byName[name].lat), Number(byName[name].lng)]);

          if (coords.length < 2) return null;

          const line = L.polyline(coords, {
            color: route.color || dayMeta[route.dayGroup]?.color || "#475569",
            weight: 3,
            opacity: 0.55,
            dashArray: route.dashArray || null
          }).bindTooltip(route.label);
          line.dayGroup = route.dayGroup;
          return line;
        })
        .filter(Boolean);
    }

    function applyTripData(data, options = {}) {
      const { resetFilters = false, source = sourceLabel, syncEditor = false } = options;

      dayGroups = deepClone(data.dayGroups);
      places = deepClone(data.places);
      routes = deepClone(data.routes);

      rebuildDerivedState();
      reconcileSelections(resetFilters);
      renderFilters();
      renderDayChoices("hotelDayChoices");
      renderDayChoices("activityDayChoices");
      renderDayChoices("placeDayChoices");
      populatePlaceCategoryOptions();
      rebuildMapLayers();

      sourceLabel = source;
      tripSourceTag.textContent = sourceLabel;

      if (syncEditor) {
        tripJsonEditor.value = JSON.stringify(currentTripData(), null, 2);
      }

      updateMap();
    }

    const controlPanel = document.getElementById("controlPanel");
    const panelToggle = document.getElementById("panelToggle");
    const panelToggleText = document.getElementById("panelToggleText");
    const tripSourceTag = document.getElementById("tripSourceTag");
    const authStatus = document.getElementById("authStatus");
    const editorStatus = document.getElementById("editorStatus");
    const editorPanel = document.getElementById("editorPanel");
    const tripJsonEditor = document.getElementById("tripJsonEditor");
    const hotelForm = document.getElementById("hotelForm");
    const activityForm = document.getElementById("activityForm");
    const placeForm = document.getElementById("placeForm");
    const placeCategory = document.getElementById("placeCategory");
    const activityCategory = document.getElementById("activityCategory");
    const authRow = document.getElementById("authRow");
    const authEmail = document.getElementById("authEmail");
    const openEditorButton = document.getElementById("openEditorButton");
    const saveTripButton = document.getElementById("saveTripButton");
    const signOutButton = document.getElementById("signOutButton");
    const sendMagicLinkButton = document.getElementById("sendMagicLinkButton");
    const mobilePanelQuery = window.matchMedia("(max-width: 720px)");
    let desktopPanelCollapsed = false;
    let mobilePanelCollapsed = true;
    let previousMobileState = mobilePanelQuery.matches;
    let editorMode = "hotel";

    function persistedSourceText() {
      return tripRecordId ? "Live from Supabase" : "Bundled fallback data";
    }

    function setStatusLine(element, message, tone = "warning") {
      element.textContent = message;
      element.dataset.tone = tone;
    }

    function toSentenceCaseLabel(dayKeys) {
      if (!dayKeys.length) return "";
      if (dayKeys.length === 1) return dayKeys[0];
      return `${dayKeys[0]}-${dayKeys[dayKeys.length - 1]}`;
    }

    function splitSuggestions(value) {
      return value
        .split("\n")
        .map(item => item.trim())
        .filter(Boolean);
    }

    function renderDayChoices(containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;
      container.innerHTML = "";

      dayOrder.forEach(dayKey => {
        const label = document.createElement("label");
        label.innerHTML = `
          <input type="checkbox" value="${escapeHtml(dayKey)}">
          ${escapeHtml(dayMeta[dayKey]?.label || dayKey)}
        `;
        container.appendChild(label);
      });
    }

    function getCheckedDays(containerId) {
      return Array.from(document.querySelectorAll(`#${containerId} input[type="checkbox"]:checked`))
        .map(box => box.value);
    }

    function populatePlaceCategoryOptions() {
      placeCategory.innerHTML = "";
      activityCategory.innerHTML = "";

      categoryOrder.forEach(category => {
        const placeOption = document.createElement("option");
        placeOption.value = category;
        placeOption.textContent = category;
        placeCategory.appendChild(placeOption);

        if (category !== "Hotels / stays") {
          const activityOption = document.createElement("option");
          activityOption.value = category;
          activityOption.textContent = category;
          activityCategory.appendChild(activityOption);
        }
      });

      placeCategory.value = "Shopping / city areas";
      activityCategory.value = "Experiences / tickets";
    }

    function setEditorMode(mode) {
      editorMode = mode;
      hotelForm.hidden = mode !== "hotel";
      activityForm.hidden = mode !== "activity";
      placeForm.hidden = mode !== "place";
      tripJsonEditor.closest(".editor-subsection").hidden = mode !== "json";

      document.querySelectorAll("#editorModeButtons button").forEach(button => {
        button.dataset.active = button.dataset.mode === mode ? "true" : "false";
      });

      requestAnimationFrame(() => {
        map.invalidateSize();
        updateMap();
      });
    }

    function resetStructuredForm(kind) {
      const fieldGroups = {
        hotel: ["hotelName", "hotelDayLabel", "hotelSearch", "hotelLat", "hotelLng", "hotelNotes"],
        activity: ["activityName", "activityDayLabel", "activitySearch", "activityLat", "activityLng", "activityNotes", "activitySuggestions"],
        place: ["placeName", "placeDayLabel", "placeSearch", "placeLat", "placeLng", "placeNotes", "placeSuggestions"]
      };

      (fieldGroups[kind] || []).forEach(id => {
        const input = document.getElementById(id);
        if (input) input.value = "";
      });

      const selectDefaults = {
        hotelStatus: "Booked / fixed",
        activityStatus: "Planned explore",
        activityCategory: "Experiences / tickets",
        placeStatus: "Planned explore",
        placeCategory: "Shopping / city areas"
      };

      const selectIdsByKind = {
        hotel: ["hotelStatus"],
        activity: ["activityStatus", "activityCategory"],
        place: ["placeStatus", "placeCategory"]
      };

      (selectIdsByKind[kind] || []).forEach(id => {
        const input = document.getElementById(id);
        if (input) input.value = selectDefaults[id];
      });

      const dayContainers = {
        hotel: "hotelDayChoices",
        activity: "activityDayChoices",
        place: "placeDayChoices"
      };
      document.querySelectorAll(`#${dayContainers[kind]} input[type="checkbox"]`).forEach(box => {
        box.checked = false;
      });
    }

    function addStructuredPlace(kind) {
      const definitions = {
        hotel: {
          nameId: "hotelName",
          statusId: "hotelStatus",
          category: "Hotels / stays",
          searchId: "hotelSearch",
          dayId: "hotelDayChoices",
          dayLabelId: "hotelDayLabel",
          latId: "hotelLat",
          lngId: "hotelLng",
          notesId: "hotelNotes"
        },
        activity: {
          nameId: "activityName",
          statusId: "activityStatus",
          categoryId: "activityCategory",
          searchId: "activitySearch",
          dayId: "activityDayChoices",
          dayLabelId: "activityDayLabel",
          latId: "activityLat",
          lngId: "activityLng",
          notesId: "activityNotes",
          suggestionsId: "activitySuggestions"
        },
        place: {
          nameId: "placeName",
          statusId: "placeStatus",
          categoryId: "placeCategory",
          searchId: "placeSearch",
          dayId: "placeDayChoices",
          dayLabelId: "placeDayLabel",
          latId: "placeLat",
          lngId: "placeLng",
          notesId: "placeNotes",
          suggestionsId: "placeSuggestions"
        }
      };

      const config = definitions[kind];
      const name = document.getElementById(config.nameId).value.trim();
      const search = document.getElementById(config.searchId).value.trim();
      const dayGroupsValue = getCheckedDays(config.dayId);
      const dayLabel = document.getElementById(config.dayLabelId).value.trim() || toSentenceCaseLabel(dayGroupsValue);
      const lat = Number(document.getElementById(config.latId).value);
      const lng = Number(document.getElementById(config.lngId).value);
      const notes = document.getElementById(config.notesId).value.trim();
      const status = document.getElementById(config.statusId).value;
      const category = config.category || document.getElementById(config.categoryId).value;
      const suggestions = config.suggestionsId
        ? splitSuggestions(document.getElementById(config.suggestionsId).value)
        : [];

      if (!name) {
        setStatusLine(editorStatus, "Add form: name is required.", "warning");
        return;
      }
      if (!dayGroupsValue.length) {
        setStatusLine(editorStatus, "Add form: choose at least one trip day.", "warning");
        return;
      }
      if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
        setStatusLine(editorStatus, "Add form: latitude and longitude are required numbers.", "warning");
        return;
      }

      const draft = currentTripData();
      if (draft.places.some(place => place.name === name)) {
        setStatusLine(editorStatus, "Add form: a place with that name already exists.", "warning");
        return;
      }

      const newPlace = {
        name,
        dayGroups: dayGroupsValue,
        dayLabel,
        status,
        category,
        lat,
        lng,
        search: search || name,
        notes: notes || `${name} added from the structured editor.`
      };

      if (suggestions.length) {
        newPlace.suggestions = suggestions;
      }

      draft.places.push(newPlace);
      draft.places.sort((a, b) => {
        const aIndex = dayOrder.indexOf(a.dayGroups[0]);
        const bIndex = dayOrder.indexOf(b.dayGroups[0]);
        return aIndex - bIndex || a.name.localeCompare(b.name);
      });

      const errors = validateTripData(draft);
      if (errors.length) {
        setStatusLine(editorStatus, `Could not add this item yet: ${errors[0]}`, "warning");
        return;
      }

      applyTripData(draft, {
        resetFilters: false,
        source: "Previewing unsaved changes",
        syncEditor: true
      });
      resetStructuredForm(kind);
      setStatusLine(editorStatus, `${name} was added to the preview. Save online when you're happy with it.`, "preview");
    }

    function isMobileView() {
      return mobilePanelQuery.matches;
    }

    function isOwnerSession() {
      return Boolean(currentUser && currentUser.id === TRIP_OWNER_ID);
    }

    function canEditTrip() {
      return isOwnerSession() || sharedEditTokenValid;
    }

    function panelToggleLabel(collapsed) {
      if (isMobileView()) return collapsed ? "Show sidebar" : "Hide sidebar";
      return collapsed ? "Expand sidebar" : "Collapse sidebar";
    }

    function setPanelCollapsed(collapsed, refit = true) {
      if (isMobileView()) mobilePanelCollapsed = collapsed;
      else desktopPanelCollapsed = collapsed;

      controlPanel.dataset.collapsed = collapsed ? "true" : "false";
      panelToggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
      panelToggleText.textContent = panelToggleLabel(collapsed);

      if (refit) {
        requestAnimationFrame(() => {
          map.invalidateSize();
          updateMap();
        });
      }
    }

    function togglePanel() {
      setPanelCollapsed(controlPanel.dataset.collapsed !== "true");
    }

    function toggleEditor(forceOpen) {
      if (!canEditTrip()) return;

      const shouldOpen = typeof forceOpen === "boolean"
        ? forceOpen
        : editorPanel.dataset.open !== "true";

      editorPanel.dataset.open = shouldOpen ? "true" : "false";
      openEditorButton.textContent = shouldOpen ? "Close editor" : "Open editor";

      if (shouldOpen && !tripJsonEditor.value.trim()) {
        tripJsonEditor.value = JSON.stringify(persistedTripData, null, 2);
      }

      requestAnimationFrame(() => {
        map.invalidateSize();
        updateMap();
      });
    }

    function getFitBoundsPadding() {
      const rect = controlPanel.getBoundingClientRect();
      const edgePadding = 22;

      if (isMobileView()) {
        const bottomPadding = Math.max(Math.round(rect.height) + 18, 120);
        return {
          paddingTopLeft: [edgePadding, edgePadding],
          paddingBottomRight: [edgePadding, bottomPadding]
        };
      }

      const leftPadding = Math.max(Math.round(rect.width) + 28, 150);
      return {
        paddingTopLeft: [leftPadding, edgePadding],
        paddingBottomRight: [edgePadding, edgePadding]
      };
    }

    function handleViewportResize() {
      const mobileNow = isMobileView();
      if (mobileNow !== previousMobileState) {
        previousMobileState = mobileNow;
        setPanelCollapsed(mobileNow ? mobilePanelCollapsed : desktopPanelCollapsed);
        return;
      }

      panelToggleText.textContent = panelToggleLabel(controlPanel.dataset.collapsed === "true");
      requestAnimationFrame(() => {
        map.invalidateSize();
        updateMap();
      });
    }

    function filterLabel(type, value) {
      if (type === "day") return dayMeta[value]?.label || value;
      return value;
    }

    function filterColor(type, value) {
      if (type === "status") return statusColors[value];
      if (type === "category") return categoryColors[value];
      return dayMeta[value]?.color || "#6d28d9";
    }

    function makeFilters(type, containerId) {
      const container = document.getElementById(containerId);
      container.innerHTML = "";

      filterValues[type].forEach(value => {
        const id = `${type}-${value}`.replace(/[^a-z0-9]/gi, "-");
        const label = document.createElement("label");
        const input = document.createElement("input");
        const dot = document.createElement("span");
        const text = document.createTextNode(` ${filterLabel(type, value)}`);

        input.type = "checkbox";
        input.id = id;
        input.dataset.type = type;
        input.dataset.value = value;
        input.checked = selected[type].has(value);

        dot.className = "dot";
        dot.style.background = filterColor(type, value);

        label.appendChild(input);
        label.appendChild(dot);
        label.appendChild(text);
        container.appendChild(label);
      });
    }

    function renderFilters() {
      makeFilters("status", "statusFilters");
      makeFilters("category", "categoryFilters");
      makeFilters("day", "dayFilters");

      document.querySelectorAll('#statusFilters input[type="checkbox"], #categoryFilters input[type="checkbox"], #dayFilters input[type="checkbox"]').forEach(box => {
        box.addEventListener("change", event => {
          const type = event.target.dataset.type;
          const value = event.target.dataset.value;
          if (event.target.checked) selected[type].add(value);
          else selected[type].delete(value);
          updateMap();
        });
      });
    }

    function syncBoxes(type) {
      document.querySelectorAll(`input[data-type="${type}"]`).forEach(box => {
        box.checked = selected[type].has(box.dataset.value);
      });
    }

    function syncAll() {
      syncBoxes("status");
      syncBoxes("category");
      syncBoxes("day");
    }

    function selectAll(type) {
      selected[type] = new Set(filterValues[type]);
      syncBoxes(type);
      updateMap();
    }

    function clearAll(type) {
      selected[type] = new Set();
      syncBoxes(type);
      updateMap();
    }

    function showEverything() {
      selected.status = new Set(filterValues.status);
      selected.category = new Set(filterValues.category);
      selected.day = new Set(filterValues.day);
      syncAll();
      updateMap();
    }

    function showBookedOnly() {
      selected.status = new Set(["Booked / fixed"]);
      selected.category = new Set(filterValues.category);
      selected.day = new Set(filterValues.day);
      syncAll();
      updateMap();
    }

    function showTravelOnly() {
      selected.status = new Set(filterValues.status);
      selected.category = new Set(["Travel / stations"]);
      selected.day = new Set(filterValues.day);
      syncAll();
      updateMap();
    }

    function hideSuggestions() {
      selected.status = new Set(statusOrder.filter(status => status !== "Suggested add-on"));
      syncBoxes("status");
      updateMap();
    }

    function focusStage(stage) {
      selected.day = new Set(stageSets[stage] || dayOrder);
      syncBoxes("day");
      updateMap();
    }

    function updateMap() {
      const visibleMarkers = [];
      const visibleRoutes = [];

      markers.forEach(marker => {
        const place = marker.place;
        const dayMatch = place.dayGroups.some(day => selected.day.has(day));
        const show = selected.status.has(place.status) && selected.category.has(place.category) && dayMatch;
        if (show) {
          if (!map.hasLayer(marker)) marker.addTo(map);
          visibleMarkers.push(marker);
        } else if (map.hasLayer(marker)) {
          map.removeLayer(marker);
        }
      });

      routeLines.forEach(line => {
        const show = selected.day.has(line.dayGroup);
        if (show) {
          if (!map.hasLayer(line)) line.addTo(map);
          visibleRoutes.push(line);
        } else if (map.hasLayer(line)) {
          map.removeLayer(line);
        }
      });

      document.getElementById("visibleCount").textContent =
        `${visibleMarkers.length} of ${markers.length} pins visible • ${visibleRoutes.length} route lines visible`;

      const layersForBounds = [...visibleMarkers, ...visibleRoutes];
      if (layersForBounds.length) {
        const bounds = L.featureGroup(layersForBounds).getBounds();
        if (bounds.isValid()) map.fitBounds(bounds, getFitBoundsPadding());
      }
    }

    function updateAuthUi() {
      const signedIn = Boolean(currentUser);
      const owner = isOwnerSession();
      const shared = sharedEditTokenValid;

      authRow.hidden = shared;
      authEmail.value = signedIn && currentUser.email ? currentUser.email : authEmail.value;
      signOutButton.hidden = !signedIn;
      openEditorButton.disabled = !canEditTrip();
      saveTripButton.disabled = !canEditTrip();
      sendMagicLinkButton.disabled = false;

      if (owner) {
        setStatusLine(authStatus, `Signed in as owner${currentUser.email ? ` (${currentUser.email})` : ""}. You can preview and save changes.`, "live");
      } else if (shared) {
        setStatusLine(authStatus, "Shared edit link active. Anyone with this link can preview and save changes.", "preview");
      } else if (signedIn) {
        setStatusLine(authStatus, "Signed in, but this account is not the owner for this trip row.", "warning");
      } else if (sharedEditToken) {
        setStatusLine(authStatus, "Shared edit link detected, but it has not been verified yet.", "warning");
      } else {
        setStatusLine(authStatus, "Public read-only mode. Sign in as the trip owner to edit and save.", "warning");
      }

      if (!canEditTrip()) {
        editorPanel.dataset.open = "false";
        openEditorButton.textContent = "Open editor";
      }
    }

    function restoreSavedTrip() {
      tripJsonEditor.value = JSON.stringify(persistedTripData, null, 2);
      applyTripData(persistedTripData, {
        resetFilters: false,
        source: persistedSourceText()
      });
      setStatusLine(editorStatus, "Restored the last saved trip data.", "live");
    }

    function previewEditorChanges() {
      let parsed;
      try {
        parsed = JSON.parse(tripJsonEditor.value);
      } catch (error) {
        setStatusLine(editorStatus, `JSON parse error: ${error.message}`, "warning");
        return;
      }

      const errors = validateTripData(parsed);
      if (errors.length) {
        setStatusLine(editorStatus, `Cannot preview yet: ${errors[0]}`, "warning");
        return;
      }

      applyTripData(parsed, {
        resetFilters: false,
        source: "Previewing unsaved changes"
      });
      setStatusLine(editorStatus, "Preview applied locally. Save online when you're happy with it.", "preview");
    }

    async function sendMagicLink() {
      const email = authEmail.value.trim();
      if (!email) {
        setStatusLine(authStatus, "Enter the email address tied to your Supabase user first.", "warning");
        return;
      }

      sendMagicLinkButton.disabled = true;
      setStatusLine(authStatus, "Sending magic link...", "warning");

      const redirectTo = `${window.location.origin}${window.location.pathname}`;
      const { error } = await supabaseClient.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: false,
          emailRedirectTo: redirectTo
        }
      });

      sendMagicLinkButton.disabled = false;

      if (error) {
        setStatusLine(authStatus, `Could not send magic link: ${error.message}`, "warning");
        return;
      }

      setStatusLine(authStatus, `Magic link sent to ${email}. Open it on this device to unlock editing.`, "live");
    }

    async function signOutUser() {
      const { error } = await supabaseClient.auth.signOut();
      if (error) {
        setStatusLine(authStatus, `Could not sign out: ${error.message}`, "warning");
        return;
      }
      currentUser = null;
      updateAuthUi();
    }

    async function verifySharedEditToken(showMessage = false) {
      if (!sharedEditToken) {
        sharedEditTokenValid = false;
        updateAuthUi();
        return false;
      }

      if (showMessage) {
        setStatusLine(authStatus, "Checking shared edit link...", "warning");
      }

      const { data, error } = await supabaseClient.rpc("verify_trip_edit_token", {
        trip_slug: TRIP_SLUG,
        edit_token: sharedEditToken
      });

      sharedEditTokenValid = Boolean(data) && !error;
      updateAuthUi();

      if (error && showMessage) {
        setStatusLine(authStatus, `Could not verify the shared edit link: ${error.message}`, "warning");
      } else if (!sharedEditTokenValid && showMessage) {
        setStatusLine(authStatus, "This shared edit link is not valid for the current trip.", "warning");
      }

      return sharedEditTokenValid;
    }

    async function loadRemoteTrip(showSuccessMessage = true) {
      const { data, error } = await supabaseClient
        .from("trips")
        .select("id, slug, title, owner_id, data, updated_at")
        .eq("slug", TRIP_SLUG)
        .maybeSingle();

      if (error) {
        setStatusLine(authStatus, `Could not load Supabase trip data: ${error.message}`, "warning");
        return;
      }

      if (!data) {
        tripRecordId = null;
        persistedTripData = deepClone(defaultTripData);
        applyTripData(persistedTripData, {
          resetFilters: true,
          source: "Bundled fallback data",
          syncEditor: true
        });
        if (showSuccessMessage) {
          const message = isOwnerSession()
            ? "No live trip row found yet. Save once to create it after the SQL policies are in place."
            : sharedEditToken
              ? "The shared edit link is present, but the live trip row does not exist yet, so the page is showing bundled fallback data."
              : "No live trip row found yet, so the page is showing bundled fallback data.";
          setStatusLine(authStatus, message, "warning");
        }
        return;
      }

      const errors = validateTripData(data.data);
      if (errors.length) {
        setStatusLine(authStatus, `The live trip row loaded, but its JSON is invalid: ${errors[0]}`, "warning");
        return;
      }

      tripRecordId = data.id;
      persistedTripData = deepClone(data.data);
      applyTripData(persistedTripData, {
        resetFilters: true,
        source: "Live from Supabase",
        syncEditor: true
      });

      if (showSuccessMessage) {
        const updatedText = data.updated_at
          ? ` Last saved ${new Date(data.updated_at).toLocaleString()}.`
          : "";
        setStatusLine(authStatus, `Loaded the live trip data from Supabase.${updatedText}`, "live");
      }
    }

    async function saveEditorToSupabase() {
      if (!canEditTrip()) {
        setStatusLine(editorStatus, "Use the shared edit link or sign in as the trip owner before saving.", "warning");
        return;
      }

      let parsed;
      try {
        parsed = JSON.parse(tripJsonEditor.value);
      } catch (error) {
        setStatusLine(editorStatus, `JSON parse error: ${error.message}`, "warning");
        return;
      }

      const errors = validateTripData(parsed);
      if (errors.length) {
        setStatusLine(editorStatus, `Cannot save yet: ${errors[0]}`, "warning");
        return;
      }

      saveTripButton.disabled = true;
      setStatusLine(editorStatus, "Saving to Supabase...", "warning");

      let result;
      if (isOwnerSession() && tripRecordId) {
        result = await supabaseClient
          .from("trips")
          .update({ title: TRIP_TITLE, data: parsed })
          .eq("id", tripRecordId)
          .select("id, updated_at, data")
          .single();
      } else if (isOwnerSession()) {
        const payload = {
          slug: TRIP_SLUG,
          title: TRIP_TITLE,
          owner_id: currentUser.id,
          data: parsed
        };
        result = await supabaseClient
          .from("trips")
          .insert(payload)
          .select("id, updated_at, data")
          .single();
      } else {
        result = await supabaseClient.rpc("save_trip_with_edit_token", {
          trip_slug: TRIP_SLUG,
          new_data: parsed,
          edit_token: sharedEditToken
        });
      }

      saveTripButton.disabled = false;

      if (result.error) {
        const hint = isOwnerSession()
          ? (tripRecordId
            ? "Check that the update policy and owner UUID are correct."
            : "If this is the first save, add an INSERT policy for the owner or create the row once in SQL.")
          : "Check that the shared edit token SQL function is installed and that the link token matches the stored hash.";
        setStatusLine(editorStatus, `Save failed: ${result.error.message}. ${hint}`, "warning");
        return;
      }

      persistedTripData = deepClone(parsed);
      await loadRemoteTrip(false);
      const updatedText = new Date().toLocaleString();
      setStatusLine(editorStatus, `Saved successfully to Supabase at ${updatedText}.`, "live");
      setStatusLine(authStatus, "Live trip data is up to date.", "live");
    }

    async function initializeSupabase() {
      supabaseClient.auth.onAuthStateChange((_event, session) => {
        currentUser = session?.user ?? null;
        updateAuthUi();
      });

      const { data, error } = await supabaseClient.auth.getSession();
      if (error) {
        setStatusLine(authStatus, `Auth session check failed: ${error.message}`, "warning");
      } else {
        currentUser = data.session?.user ?? null;
      }

      updateAuthUi();
      await loadRemoteTrip(false);
      await verifySharedEditToken(false);
    }

    window.addEventListener("resize", handleViewportResize);

    applyTripData(persistedTripData, {
      resetFilters: true,
      source: "Bundled fallback data",
      syncEditor: true
    });
    setEditorMode(editorMode);
    resetStructuredForm("hotel");
    resetStructuredForm("activity");
    resetStructuredForm("place");
    setPanelCollapsed(previousMobileState ? mobilePanelCollapsed : desktopPanelCollapsed, false);
    updateAuthUi();
    initializeSupabase();
