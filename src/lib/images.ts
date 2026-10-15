// Real Sigma House Nature Kitchen photography, provided by the business and
// placed in /public. Used for banners and key content photos across the
// site. Add more here as additional real photos become available.

export const bannerImages = {
  cookingTogether: "/banner02.jpeg", // guests preparing food at the kitchen counter
  platedFeast: "/banner03.jpeg", // the finished clay-pot rice & curry spread
  kitchenPavilion: "/banner04.jpeg", // the open-air kitchen, garden view
};

export const hostImages = {
  // This is actually a group photo (host + guests), not a solo portrait  
  // captioned accordingly wherever it's used.
  hostWithGuests: encodeURI("/Portrait of host.jpeg"),
  takeHomeRecipeCard: "/about_page/tack_home_recipy01.jpeg",
  openFireCooking: encodeURI("/about_page/open fire cooking.jpeg"),
  intimateGroup: encodeURI("/about_page/WhatsApp Image 2026-10-02 at 19.56.36 (1).jpeg"),
  gardenSpices: encodeURI("/signature dishes on the table/Garden Spices.jpeg"),
};

export const heroSlides = [
  bannerImages.cookingTogether,
  hostImages.openFireCooking,
  bannerImages.kitchenPavilion,
  bannerImages.platedFeast,
];

// Beetroot Curry's uploaded photo ("bitroot.jpeg") actually shows egg
// hoppers, not beetroot curry   likely a mislabeled upload. Not wired in
// anywhere; replace with a correct photo and add it to dishImages below.

export const galleryImages = {
  welcomeKingCoconut: encodeURI("/gallery/wellcome_king coconut.jpeg"),
  meetingYourHost: encodeURI("/gallery/meet your host.jpeg"),
  spiceIntroduction: encodeURI("/gallery/Spices introduce.jpeg"),
  roastedCurryPowder: encodeURI("/gallery/Rosted Curry powder.jpeg"),
  handsPreparingIngredients: encodeURI("/gallery/Hand preparing ingredients.jpeg"),
  cookingOverTheFire: encodeURI("/gallery/Cooking over the fire.jpeg"),
  riceAndCurrySpread: encodeURI("/gallery/Rice and curry spread.jpeg"),
  gardenHerbs: encodeURI("/gallery/Grden herbs.jpeg"),
  pickingVegetables: encodeURI("/gallery/Picking vegetable ingarden.jpeg"),
  behindTheScenes: encodeURI("/gallery/Behind the scenes in the kitchen.jpeg"),
};

export const dishImages = {
  coconutSambol: encodeURI("/signature dishes on the table/Pol-Sambol.webp"),
  dhalCurry: encodeURI(
    "/signature dishes on the table/Sri Lankan Style Dhal Curry _ Parippu Curry.jpeg"
  ),
  jackfruitCurry: encodeURI("/signature dishes on the table/Jackfruit Curry.jpeg"),
  eggHoppers: encodeURI(
    "/signature dishes on the table/843a689bbd0e21e9187f52d871b44312.jpg.jpeg"
  ),
  papadamAndChilli: encodeURI(
    "/signature dishes on the table/Papadam and Fried Chilli.jpeg"
  ),
};
