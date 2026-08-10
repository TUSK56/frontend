/* ============================================================================
   Art Vision — project data
   ----------------------------------------------------------------------------
   This is the only file you edit to add a store, rename a location, or split a
   photo set across branches. The brand pages build themselves from it.

   Each location's `frames` are the image numbers inside
   assets/projects/<brand>/  — so [1,2,3] means 01.webp, 02.webp, 03.webp.
   The first frame in the list is used as that location's cover.

   To add a second branch, copy a location object and give it the frames that
   belong to it:

       { slug:"mall-of-egypt", name:"Mall of Egypt", city:"6th of October",
         year:"2025", frames:[6,7,8] }
   ============================================================================ */

window.AV_PROJECTS = {

  birkenstock: {
    name: "Birkenstock",
    scope: "Store build-out",
    intro: "A German heritage footwear brand brought onto an Egyptian mall floor — timber fascia, backlit signage and a full fixture set built and installed to the brand's standard.",
    locations: [
      { slug: "district-5", name: "District 5", city: "New Cairo", year: "",
        frames: [1, 2, 3, 4, 5] }
    ]
  },

  camper: {
    name: "Camper",
    scope: "Store build-out",
    intro: "A double-height glazed frontage on a spider-fixed screen, and an interior of vertical timber fins carrying the brand's red across the full shell.",
    locations: [
      // RENAME ME — replace with the real mall / district for this build
      { slug: "location-01", name: "Location 01", city: "", year: "",
        frames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] }
    ]
  },

  guru: {
    name: "Guru",
    scope: "Store build-out",
    intro: "A multi-brand sports store: blue mesh frontage, exposed services overhead, neon rakes across concrete, and a fixture system built to carry many brands at once.",
    locations: [
      // RENAME ME
      { slug: "location-01", name: "Location 01", city: "", year: "",
        frames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
    ]
  },

  springfield: {
    name: "Springfield",
    scope: "Store build-out",
    intro: "A calm, light retail floor — pale timber, linear lighting and a fixture family designed to keep the merchandise reading as the loudest thing in the room.",
    locations: [
      // RENAME ME
      { slug: "location-01", name: "Location 01", city: "", year: "",
        frames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
    ]
  }

};
