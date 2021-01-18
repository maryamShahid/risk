export const NUMBER_OF_CARDS_IN_DECK = 44;

export const NUMBER_OF_TRADES_SET = 7;

export const NUMBER_OF_CARDS_FOR_TRADE = 3;

export const BREAKPOINTS = {
  xs: "max-width: 575.98px",
  sm: "max-width: 767.98px",
  md: "max-width: 991.98px",
  lg: "max-width: 1199.98px",
  xl: "min-width: 1200px",
};

export const COUNTRIES = {
  afghanistan: { name: "Afghanistan", value: "afghanistan" },
  alaska: { name: "Alaska", value: "alaska" },
  alberta: { name: "Alberta", value: "alberta" },
  argentina: { name: "Argentina", value: "argentina" },
  brazil: { name: "Brazil", value: "brazil" },
  central_america: { name: "Central America", value: "central_america" },
  china: { name: "China", value: "china" },
  congo: { name: "Congo", value: "congo" },
  east_africa: { name: "East Africa", value: "east_africa" },
  eastern_australia: {
    name: "Eastern Australia",
    value: "eastern_australia",
  },
  eastern_united_states: {
    name: "Eastern United States",
    value: "eastern_united_states",
  },
  egypt: { name: "Egypt", value: "egypt" },
  great_britain: { name: "Great Britain", value: "great_britain" },
  greenland: { name: "Greenland", value: "greenland" },
  iceland: { name: "Iceland", value: "iceland" },
  india: { name: "India", value: "india" },
  indonesia: { name: "Indonesia", value: "indonesia" },
  irkutsk: { name: "Irkutsk", value: "irkutsk" },
  japan: { name: "Japan", value: "japan" },
  kamchatka: { name: "Kamchatka", value: "kamchatka" },
  madagascar: { name: "Madagascar", value: "madagascar" },
  middle_east: { name: "Middle East", value: "middle_east" },
  mongolia: { name: "Mongolia", value: "mongolia" },
  new_guinea: { name: "New Guinea", value: "new_guinea" },
  north_africa: { name: "North Africa", value: "north_africa" },
  northern_europe: { name: "Northern Europe", value: "northern_europe" },
  northwest_territory: {
    name: "Northwest Territory",
    value: "northwest_territory",
  },
  ontario: { name: "Ontario", value: "ontario" },
  peru: { name: "Peru", value: "peru" },
  scandinavia: { name: "Scandinavia", value: "scandinavia" },
  siam: { name: "Siam", value: "siam" },
  siberia: { name: "Siberia", value: "siberia" },
  south_africa: { name: "South Africa", value: "south_africa" },
  southeast_asia: { name: "Southeast Asia", value: "southeast_asia" },
  southern_europe: { name: "Southern Europe", value: "southern_europe" },
  ural: { name: "Ural", value: "ural" },
  ukraine: { name: "Ukraine", value: "ukraine" },
  venezuela: { name: "Venezuela", value: "venezuela" },
  western_australia: {
    name: "Western Australia",
    value: "western_australia",
  },
  western_europe: { name: "Western Europe", value: "western_europe" },
  western_united_states: {
    name: "Western United States",
    value: "western_united_states",
  },
  quebec: { name: "Quebec", value: "quebec" },
  yakursk: { name: "Yakursk", value: "yakursk" },
};

export const TROOP_TYPES = {
  Infantry: { name: "INFANTRY", troopSize: 1 },
  Cavalry: { name: "CAVALRY", troopSize: 5 },
  Artillery: { name: "ARTILLERY", troopSize: 10 },
};

export const CARD_TYPES = {
  TerritoryType: { type: "Territory" },
  WildType: { type: "Wild" },
};

export const WILDCARDS = [
  {
    troop1: TROOP_TYPES.Infantry.name,
    troop2: TROOP_TYPES.Artillery.name,
    troop3: TROOP_TYPES.Cavalry.name,
  },
  {
    troop1: TROOP_TYPES.Infantry.name,
    troop2: TROOP_TYPES.Artillery.name,
    troop3: TROOP_TYPES.Cavalry.name,
  },
];

export const COLORS = ['#0000FF', '#000000', '#FF0000', '#009900', '#FF66B2'];

export const CARDS = [
  { country: COUNTRIES.afghanistan.name, troop: TROOP_TYPES.Cavalry.name },
  { country: COUNTRIES.alaska.name, troop: TROOP_TYPES.Infantry.name },
  { country: COUNTRIES.alberta.name, troop: TROOP_TYPES.Cavalry.name },
  { country: COUNTRIES.argentina.name, troop: TROOP_TYPES.Infantry.name },
  { country: COUNTRIES.brazil.name, troop: TROOP_TYPES.Artillery.name },
  {
    country: COUNTRIES.central_america.name,
    troop: TROOP_TYPES.Artillery.name,
  },
  { country: COUNTRIES.china.name, troop: TROOP_TYPES.Infantry.name },
  { country: COUNTRIES.congo.name, troop: TROOP_TYPES.Infantry.name },
  { country: COUNTRIES.east_africa.name, troop: TROOP_TYPES.Infantry.name },
  {
    country: COUNTRIES.eastern_australia.name,
    troop: TROOP_TYPES.Artillery.name,
  },
  {
    country: COUNTRIES.eastern_united_states.name,
    troop: TROOP_TYPES.Artillery.name,
  },
  { country: COUNTRIES.egypt.name, troop: TROOP_TYPES.Infantry.name },
  {
    country: COUNTRIES.great_britain.name,
    troop: TROOP_TYPES.Artillery.name,
  },
  { country: COUNTRIES.greenland.name, troop: TROOP_TYPES.Cavalry.name },
  { country: COUNTRIES.iceland.name, troop: TROOP_TYPES.Infantry.name },
  { country: COUNTRIES.india.name, troop: TROOP_TYPES.Cavalry.name },
  { country: COUNTRIES.indonesia.name, troop: TROOP_TYPES.Artillery.name },
  { country: COUNTRIES.irkutsk.name, troop: TROOP_TYPES.Cavalry.name },
  { country: COUNTRIES.japan.name, troop: TROOP_TYPES.Artillery.name },
  { country: COUNTRIES.kamchatka.name, troop: TROOP_TYPES.Infantry.name },
  { country: COUNTRIES.madagascar.name, troop: TROOP_TYPES.Cavalry.name },
  { country: COUNTRIES.middle_east.name, troop: TROOP_TYPES.Infantry.name },
  { country: COUNTRIES.mongolia.name, troop: TROOP_TYPES.Infantry.name },
  { country: COUNTRIES.new_guinea.name, troop: TROOP_TYPES.Infantry.name },
  { country: COUNTRIES.north_africa.name, troop: TROOP_TYPES.Cavalry.name },
  {
    country: COUNTRIES.northern_europe.name,
    troop: TROOP_TYPES.Artillery.name,
  },
  {
    country: COUNTRIES.northwest_territory.name,
    troop: TROOP_TYPES.Artillery.name,
  },
  { country: COUNTRIES.ontario.name, troop: TROOP_TYPES.Cavalry.name },
  { country: COUNTRIES.peru.name, troop: TROOP_TYPES.Infantry.name },
  { country: COUNTRIES.quebec.name, troop: TROOP_TYPES.Cavalry.name },
  { country: COUNTRIES.scandinavia.name, troop: TROOP_TYPES.Cavalry.name },
  { country: COUNTRIES.siam.name, troop: TROOP_TYPES.Infantry.name },
  { country: COUNTRIES.siberia.name, troop: TROOP_TYPES.Cavalry.name },
  { country: COUNTRIES.south_africa.name, troop: TROOP_TYPES.Artillery.name },
  {
    country: COUNTRIES.southern_europe.name,
    troop: TROOP_TYPES.Artillery.name,
  },
  { country: COUNTRIES.ural.name, troop: TROOP_TYPES.Cavalry.name },
  { country: COUNTRIES.ukraine.name, troop: TROOP_TYPES.Cavalry.name },
  { country: COUNTRIES.venezuela.name, troop: TROOP_TYPES.Infantry.name },
  {
    country: COUNTRIES.western_australia.name,
    troop: TROOP_TYPES.Artillery.name,
  },
  {
    country: COUNTRIES.western_europe.name,
    troop: TROOP_TYPES.Artillery.name,
  },
  {
    country: COUNTRIES.western_united_states.name,
    troop: TROOP_TYPES.Artillery.name,
  },
  { country: COUNTRIES.yakursk.name, troop: TROOP_TYPES.Cavalry.name },
];

export const PLAYERS = [
  {
    name: "Napoleon",
    country: "France",
    color: "#030f63",
    army: 10,
    reserve: 10,
    areas: [],
    bonus: 2,
    alive: true,
  },
  {
    name: "Elizabeth I",
    country: "England",
    color: "#d6040e",
    army: 20,
    reserve: 20,
    areas: [],
    bonus: 2,
    alive: true,
  },
  {
    name: "Washington",
    country: "USA",
    color: "#d86b04",
    army: 20,
    reserve: 20,
    areas: [],
    bonus: 2,
    alive: true,
  },
];

export const NEIGHBOURS = {
    afghanistan: {
        countries: ["ukraine", "ural", "middle_east", "china", "india"],
    },
    alaska: { countries: ["kamchatka", "alberta", "northwest_territory"] },
    alberta: {
        countries: [
            "alaska",
            "western_united_states",
            "ontario",
            "northwest_territory",
        ],
    },
    argentina: { countries: ["brazil", "peru"] },
    brazil: { countries: ["peru", "argentina", "north_africa", "venezuela"] },
    central_america: {
        countries: [
            "venezuela",
            "eastern_united_states",
            "western_united_states",
        ],
    },
    china: {
        countries: [
            "ural",
            "siberia",
            "afghanistan",
            "mongolia",
            "siam",
            "india",
        ],
    },
    congo: { countries: ["south_africa", "north_africa", "east_africa"] },
    east_africa: {
        countries: [
            "middle_east",
            "egypt",
            "north_africa",
            "congo",
            "madagascar",
            "south_africa",
        ],
    },
    eastern_australia: { countries: ["western_australia", "new_guinea"] },
    eastern_united_states: {
        countries: [
            "central_america",
            "quebec",
            "ontario",
            "western_united_states",
        ],
    },
    egypt: {
        countries: [
            "middle_east",
            "southern_europe",
            "north_africa",
            "east_africa",
        ],
    },
    great_britain: {
        countries: [
            "western_europe",
            "iceland",
            "northern_europe",
            "scandinavia",
        ],
    },
    greenland: {
        countries: ["iceland", "quebec", "ontario", "northwest_territory"],
    },
    iceland: { countries: ["greenland", "great_britain", "scandinavia"] },
    india: { countries: ["middle_east", "siam", "afghanistan", "china"] },
    indonesia: { countries: ["siam", "western_australia", "new_guinea"] },
    irkutsk: { countries: ["yakursk", "siberia", "kamchatka", "mongolia"] },
    japan: { countries: ["kamchatka", "mongolia"] },
    kamchatka: {
        countries: ["alaska", "yakursk", "japan", "irkutsk", "mongolia"],
    },
    madagascar: { countries: ["south_africa", "east_africa"] },
    middle_east: {
        countries: [
            "ukraine",
            "afghanistan",
            "india",
            "egypt",
            "east_africa",
            "southern_europe",
        ],
    },
    mongolia: {
        countries: ["irkutsk", "siberia", "kamchatka", "china", "japan"],
    },
    new_guinea: {
        countries: ["indonesia", "eastern_australia", "western_australia"],
    },
    north_africa: {
        countries: [
            "egypt",
            "southern_europe",
            "western_europe",
            "east_africa",
            "congo",
            "brazil",
        ],
    },
    northern_europe: {
        countries: [
            "ukraine",
            "great_britain",
            "scandinavia",
            "southern_europe",
            "western_europe",
        ],
    },
    northwest_territory: {
        countries: ["greenland", "alaska", "alberta", "ontario"],
    },
    ontario: {
        countries: [
            "greenland",
            "quebec",
            "alberta",
            "western_united_states",
            "eastern_united_states",
            "northwest_territory",
        ],
    },
    peru: { countries: ["brazil", "argentina", "venezuela"] },
    quebec: { countries: ["greenland", "eastern_united_states", "ontario"] },
    scandinavia: {
        countries: ["iceland", "great_britain", "ukraine", "northern_europe"],
    },
    siam: { countries: ["indonesia", "india", "china"] },
    siberia: { countries: ["ural", "mongolia", "yakursk", "irkutsk", "china"] },
    south_africa: { countries: ["congo", "madagascar", "east_africa"] },
    southern_europe: {
        countries: [
            "north_africa",
            "egypt",
            "northern_europe",
            "western_europe",
            "middle_east",
            "ukraine",
        ],
    },
    ural: { countries: ["ukraine", "siberia", "afghanistan", "china"] },
    ukraine: {
        countries: [
            "scandinavia",
            "ural",
            "northern_europe",
            "southern_europe",
            "afghanistan",
            "middle_east",
        ],
    },
    venezuela: { countries: ["brazil", "peru", "central_america"] },
    western_australia: {
        countries: ["eastern_australia", "new_guinea", "indonesia"],
    },
    western_europe: {
        countries: [
            "north_africa",
            "great_britain",
            "northern_europe",
            "southern_europe",
        ],
    },
    western_united_states: {
        countries: [
            "eastern_united_states",
            "central_america",
            "ontario",
            "alberta",
        ],
    },
    yakursk: { countries: ["irkutsk", "siberia", "kamchatka"] },
};

export const CONTINENTS = [
  "ASIA",
  "AFRICA",
  "AUSTRALIA",
  "NORTH_AMERICA",
  "SOUTH_AMERICA",
  "EUROPE",
];

export const COUNTRIES_OF_CONTINENTS = {
  asia: ["india", "middle_east", "siam", "china", "afghanistan", "ural", "siberia", "irkutsk", "mongolia", "japan", "kamchatka", "yakursk"],
  africa: ["madagascar", "south_africa", "east_africa", "congo", "north_africa", "egypt"],
  australia: ["indonesia", "new_guinea", "eastern_australia", "western_australia"],
  north_america: ["alaska", "northwest_territory", "alberta", "ontario", "quebec", "western_united_states", "eastern_uited_states", "central_america", "greenland"],
  south_america: ["venezuela", "peru", "brazil", "argentina"],
  europe: ["iceland", "great_britain", "western_europe", "southern_europe", "northern_europe", "scandinavia", "ukraine"],
};

export const ARMIES_PER_CONTINENT = {
  asia: 7,
  europe: 5,
  north_america: 5,
  africa: 3,
  south_america: 2,
  australia: 2,
};