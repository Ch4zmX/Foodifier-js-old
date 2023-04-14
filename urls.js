const WAITZ_URL = 'https://waitz.io/live/ucsc';



const BASE_URL = 'https://nutrition.sa.ucsc.edu/longmenu.aspx?sName=UC+Santa+Cruz+Dining&locationNum='
const locations = {
    'Cowell/Stevenson': '05&locationName=Cowell%2fStevenson+Dining+Hall&naFlag=1',
    'Crown/Merrill': '20&locationName=Crown%2fMerrill+Dining+Hall&naFlag=1',
    'Nine/Ten': '40&locationName=College+Nine%2fJohn+R.+Lewis+Dining+Hall&naFlag=1',
    'Porter/Kresge': '25&locationName=Porter%2fKresge+Dining+Hall&naFlag=1'
}
const MEAL_URL = '&WeeksMenus=UCSC+-+This+Week%27s+Menus&mealName=';
MEALS = ['Breakfast', 'Lunch', 'Dinner', 'Late Night', 'Auto']  // Auto meal selects meal based on current time, implement later

const DIVIDERS = [
    '-- Soups --', 
    '-- Breakfast --', 
    '-- Grill --', 
    '-- Entrees --', 
    '-- Pizza --', 
    '-- Clean Plate --', 
    '-- DH Baked --', 
    '-- Bakery --', 
    '-- Open Bars --', 
    '-- All Day --'  // strings corresponding to the dividers, will be used to determine menu validity 
];  // (eg if cereal is first divider found, then the dh is not open for that meal)

const EMOJIS = { // dict of emojis corresponding to each dietary restriction or allergy
    'veggie': '🥦',
    'vegan': '🌱', 
    'halal': '🍖', 
    'eggs': '🥚', 
    'beef': '🐮', 
    'milk': '🥛', 
    'fish': '🐟', 
    'alcohol': '🍷', 
    'gluten': '🍞', 
    'soy': '🫘', // idk man
    'treenut': '🥥', 
    'sesame': '', // if youre allergic to sesame you probably shouldnt be trusting a random discord bot to have 100% accurate nutrition info (i had no idea what emoji to use)
    'pork': '🐷', 
    'shellfish': '🦐', 
    'nuts': '🥜',
}