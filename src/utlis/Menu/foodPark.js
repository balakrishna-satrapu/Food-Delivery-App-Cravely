export const foodPark = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "Food Park Family Restaurant",
            headerStyling: {
              textColor: "text_Highest_Emphasis",
              textVariant: "header_H3_Black",
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
            tabs: [
              {
                id: "Order Online",
                title: "Order Online",
              },
            ],
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "103033",
              name: "Food Park Family Restaurant",
              city: "Kakinada",
              slugs: {
                restaurant: "food-park-family-gandhi-nagar-bhanugudi",
                city: "kakinada",
              },
              uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              cloudinaryImageId: "wuxfcmpwh9m1mfehl94x",
              locality: "Kakinada",
              areaName: "Kakinada",
              costForTwo: "24900",
              costForTwoMessage: "₹249 for two",
              cuisines: ["Biryani", "North Indian"],
              avgRating: 4.2,
              feeDetails: {
                restaurantId: "103033",
                fees: [{}],
              },
              parentId: "12732",
              avgRatingString: "4.2",
              totalRatingsString: "70K+ ratings",
              sla: {
                restaurantId: "103033",
                deliveryTime: 26,
                minDeliveryTime: 25,
                maxDeliveryTime: 30,
                lastMileTravel: 1.7,
                serviceability: "SERVICEABLE",
                stressFactor: 1,
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                zoneId: 905,
                slaString: "25-30 MINS",
                lastMileTravelString: "1.7 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2026-03-02 23:59:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                header: "Get items under 74",
                shortDescriptionList: [
                  {
                    meta: "99 store",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Flat ₹75 Off | Use TREAT4U",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "99 store",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Flat ₹75 Off | Use TREAT4U",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString: "food-park-family-gandhi-nagar-bhanugudi",
              isOpen: true,
              labels: [
                {
                  title: "Timings",
                  message: "null",
                },
                {
                  title: "Address",
                  message:
                    "8-5-22 ontimamidi junction ,gandhi park back side,gandhinagar",
                },
                {
                  title: "Cuisines",
                  message: "Biryani,North Indian",
                },
              ],
              totalRatings: 70000,
              aggregatedDiscountInfoV2: {
                header: "Get items under 74",
                shortDescriptionList: [
                  {
                    meta: "99 store",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Flat ₹75 Off | Use TREAT4U",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "99 store",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Flat ₹75 Off | Use TREAT4U",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                ],
                couponDetailsCta: "View coupon details",
              },
              type: "F",
              nudgeBanners: [
                {
                  priority: 2,
                  discountInfo: {
                    discountType: "FinalPrice",
                    value: 85,
                  },
                  unlockedMessage: "Deal of the Day unlocked!",
                  minItemCount: 1,
                  maxItemCount: 1,
                  type: "SILD",
                  nudgeTagInfo: {
                    title: "Deal of the Day",
                    fontName: "FONT_NAME_CONDENSED_BOLD",
                  },
                  logoCtx: {},
                  movComputationType: "MOV_COMPUTATION_TYPE_DISCOUNTED_PRICE",
                },
              ],
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/103033",
              },
              loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                  logo: "v1634558776/swiggy_one/OneLogo_3x.png",
                },
                freedelMessage: "Free delivery on orders above ₹199",
              },
              ratingSlab: "RATING_SLAB_5",
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              hasBestsellerItems: true,
              cartOrderabilityNudgeBanner: {
                parameters: {},
                presentation: {},
              },
              latLong: "16.968751,82.224594",
              backgroundImageOverlayInfo: {},
              menuHeaderLottie: {
                menuHeaderLottie:
                  "https://media-assets.swiggy.com/bolt/bolt%2015%20black.json?updatedAt=1733379625251",
                frequencyCapping: {},
              },
              featuredSectionInfo: {},
              requestContexts: ["enable_ecosaver", "99store"],
              hasBoltItems: true,
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_AND_SHOW_MENU_OFFER_NUDGE",
            sectionId: "MENU_ITEM_CART_UPDATE_POP_CROUTON",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              rows: 1,
              columns: 5,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 10,
                  right: 10,
                  bottom: 16,
                },
              },
            },
            id: "offerCollectionWidget_UX4",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                offers: [
                  {
                    info: {
                      header: "Extra ₹50 off",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2026/1/12/96c82e26-2baa-4216-985d-f97a215fdde2_d07196b25b85d1fd9951e10c255ab737.avif",
                      offerIds: ["41e15017-3af9-496c-a398-7d3b8e34a07f"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      description: "NO CODE REQUIRED | ABOVE ₹99",
                      offerType: "offers",
                      restId: "103033",
                      offerLogo:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2026/1/12/96c82e26-2baa-4216-985d-f97a215fdde2_d07196b25b85d1fd9951e10c255ab737.avif",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "ITEMS AT ₹74",
                      offerTag: "DEAL OF DAY",
                      offerTagColor: "#E46D47",
                      offerIds: ["957a9b58-19cd-44d1-87fb-5758c45fdad4"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      description: "ON SELECT ITEMS |",
                      offerType: "offers",
                      restId: "103033",
                      offerLogo: "offers/deal-of-day",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "FLAT ₹75 OFF",
                      offerTag: "FLAT DEAL",
                      offerTagColor: "#E46D47",
                      offerIds: ["9d8e77a2-e8d3-4123-8f4f-c8910f56f71e"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE TREAT4U",
                      description: "ABOVE ₹249",
                      offerType: "offers",
                      restId: "103033",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE TREAT4U",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "50% OFF UPTO ₹100",
                      offerTagColor: "#E46D47",
                      offerIds: ["5ae06403-b5bc-42c6-b3f8-fb2072b274d0"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE MISSEDYOU",
                      description: "ABOVE ₹149",
                      offerType: "offers",
                      restId: "103033",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE MISSEDYOU",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "7.5% OFF UPTO ₹100",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2026/2/28/fa07ebc1-f02e-4584-8057-29c92f4872b8_YESBankMenuLogoNew1.png",
                      offerIds: ["c97946a6-dfd8-492f-89dd-b9c970531b7c"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "NO CODE REQUIRED",
                      description: "ABOVE ₹399",
                      offerType: "offers",
                      restId: "103033",
                      offerLogo:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2026/2/28/fa07ebc1-f02e-4584-8057-29c92f4872b8_YESBankMenuLogoNew1.png",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "NO CODE REQUIRED",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                ],
                habitMilestoneInfo: {
                  callout: {},
                },
                loyaltyDiscoverPresentationInfo: {
                  logoCtx: {},
                },
              },
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      badges: {},
                      vegOnlyDetails: {
                        imageId: "AutoVegOnly_qkjowj",
                        title: "Showing only vegetarian options.",
                        description:
                          "Tap on the VEG ONLY button to turn off the setting",
                      },
                      topRatedFilter: {
                        attributes: {
                          displayText: "Ratings 4.0+",
                        },
                      },
                      kidsCategoryFilter: {
                        attributes: {
                          displayText: "Kids Favourites",
                          tooltip: {
                            enabled: true,
                            displayText:
                              "Kids Favourites Filter applied. Remove this filter to see the full Menu.",
                          },
                        },
                      },
                      vegFilter: {
                        attributes: {
                          displayText: "VEG",
                        },
                      },
                      nonvegFilter: {
                        attributes: {
                          displayText: "NONVEG",
                        },
                      },
                      bolt: {
                        attributes: {
                          displayText: "Food in 10-15 mins",
                          displayImage: "bolt/bolt%2011.png",
                          unselectedDisplayImage: "bolt/bolt%2011.png",
                        },
                      },
                    },
                    relevance: {
                      type: "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                      sectionId: "MENU_FILTER_TOGGLE",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel",
                      title: "Top Picks",
                      carousel: [
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "5331703",
                          creativeId: "TopPicks2024/31834442B.png",
                          title: "Chilli Chicken Dry",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "31834442",
                              name: "Chilli Chicken Dry",
                              category: "Main Course",
                              description: "| Medium spicy | Dry |",
                              imageId: "38d6849ea4f3829da65c765eeaceb5d9",
                              inStock: 1,
                              price: 27000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "39731920",
                                  groupName: "Add on plate",
                                  choices: [
                                    {
                                      id: "27241776",
                                      name: "2 Plates",
                                      price: 1000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "27241777",
                                      name: "1 Plate",
                                      price: 500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              itemBadge: {},
                              badgesV2: {},
                              itemPriceStrikeOff: true,
                              parentId: "4339494",
                            },
                            analytics: {},
                            restaurant: {
                              info: {
                                dishStyle: {
                                  socialMarkerStyle: [
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                                      title: "Protein Rich",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "brand_proteinator_primary",
                                    },
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_BESTSELLER",
                                      title: "Bestseller",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "color_swiggy_one",
                                    },
                                  ],
                                },
                              },
                            },
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "5330586",
                          creativeId: "TopPicks2024/31834446B.png",
                          title: "Chicken 65",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "31834446",
                              name: "Chicken 65",
                              category: "Main Course",
                              description: "| Medium spicy | Dry |",
                              imageId: "fd0231de9320c50b52a9125f68eb022c",
                              inStock: 1,
                              price: 27000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "39731915",
                                  groupName: "Add on plate",
                                  choices: [
                                    {
                                      id: "27241776",
                                      name: "2 Plates",
                                      price: 1000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "27241777",
                                      name: "1 Plate",
                                      price: 500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              itemBadge: {},
                              badgesV2: {},
                              itemPriceStrikeOff: true,
                              imageBadges: [
                                {
                                  imageId: "merch_bau/High%20Protein%201_1.png",
                                },
                              ],
                              parentId: "4339445",
                            },
                            analytics: {},
                            restaurant: {
                              info: {
                                dishStyle: {
                                  socialMarkerStyle: [
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                                      title: "Protein Rich",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "brand_proteinator_primary",
                                    },
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_BESTSELLER",
                                      title: "Bestseller",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "color_swiggy_one",
                                    },
                                  ],
                                },
                              },
                            },
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "77425277",
                              name: "Chicken Fry-bit Biryani",
                              category: "Rice And Biryani",
                              description:
                                "| Serves1-2 | Medium spicy | With-bone | Served with Raita |",
                              imageId: "0bdac7be07e6a8aa74dd5e3be82a5d23",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "11808488",
                                    name: "Variation",
                                    variations: [
                                      {
                                        name: "Half",
                                        price: 215,
                                        default: 1,
                                        id: "38737442",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 300,
                                        id: "38737441",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "11808488",
                                        variationId: "38737442",
                                      },
                                    ],
                                    price: 21500,
                                    addonCombinations: [
                                      {
                                        groupId: "39731953",
                                        addonId: "27241776",
                                      },
                                      {
                                        groupId: "39731953",
                                        addonId: "27241777",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "11808488",
                                        variationId: "38737441",
                                      },
                                    ],
                                    price: 30000,
                                    addonCombinations: [
                                      {
                                        groupId: "39731953",
                                        addonId: "27241776",
                                      },
                                      {
                                        groupId: "39731953",
                                        addonId: "27241777",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "39731953",
                                  groupName: "Add on plate",
                                  choices: [
                                    {
                                      id: "27241776",
                                      name: "2 Plates",
                                      price: 1000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "27241777",
                                      name: "1 Plate",
                                      price: 500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              defaultPrice: 21500,
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "13294 ratings",
                                  ratingCountV2: "13.3K+",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "4339463",
                              menuFilterIds: [
                                "bestseller",
                                "NONVEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28709779",
                              name: "Chicken Boneless Biryani",
                              category: "Rice And Biryani",
                              description:
                                "| Serves 1-2 | Medium spicy | Served with Raita |",
                              imageId: "03869e9d5f6559125cd1fce064a6aefb",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "11808486",
                                    name: "Variation",
                                    variations: [
                                      {
                                        name: "Half",
                                        price: 225,
                                        default: 1,
                                        id: "38737438",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 310,
                                        id: "38737437",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "11808486",
                                        variationId: "38737438",
                                      },
                                    ],
                                    price: 22500,
                                    addonCombinations: [
                                      {
                                        groupId: "39731951",
                                        addonId: "27241776",
                                      },
                                      {
                                        groupId: "39731951",
                                        addonId: "27241777",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "11808486",
                                        variationId: "38737437",
                                      },
                                    ],
                                    price: 31000,
                                    addonCombinations: [
                                      {
                                        groupId: "39731951",
                                        addonId: "27241776",
                                      },
                                      {
                                        groupId: "39731951",
                                        addonId: "27241777",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "39731951",
                                  groupName: "Add on plate",
                                  choices: [
                                    {
                                      id: "27241776",
                                      name: "2 Plates",
                                      price: 1000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "27241777",
                                      name: "1 Plate",
                                      price: 500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              defaultPrice: 22500,
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "7653 ratings",
                                  ratingCountV2: "7.7K+",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "4339447",
                              menuFilterIds: [
                                "bestseller",
                                "NONVEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "31834420",
                              name: "Joint Fry Biryani",
                              category: "Rice And Biryani",
                              description:
                                "| Serves1-2 | Medium spicy | With-bone | Served with Raita |",
                              imageId: "74827b67bbffd7578efa5264cdeac38a",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "11808490",
                                    name: "Variation",
                                    variations: [
                                      {
                                        name: "Half",
                                        price: 215,
                                        default: 1,
                                        id: "38737446",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 300,
                                        id: "38737445",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "11808490",
                                        variationId: "38737446",
                                      },
                                    ],
                                    price: 21500,
                                    addonCombinations: [
                                      {
                                        groupId: "39731956",
                                        addonId: "27241776",
                                      },
                                      {
                                        groupId: "39731956",
                                        addonId: "27241777",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "11808490",
                                        variationId: "38737445",
                                      },
                                    ],
                                    price: 30000,
                                    addonCombinations: [
                                      {
                                        groupId: "39731956",
                                        addonId: "27241776",
                                      },
                                      {
                                        groupId: "39731956",
                                        addonId: "27241777",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "39731956",
                                  groupName: "Add on plate",
                                  choices: [
                                    {
                                      id: "27241776",
                                      name: "2 Plates",
                                      price: 1000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "27241777",
                                      name: "1 Plate",
                                      price: 500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              defaultPrice: 21500,
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "2491 ratings",
                                  ratingCountV2: "2.5K+",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "4339577",
                              menuFilterIds: [
                                "bestseller",
                                "NONVEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "77425278",
                              name: "Hyd Dum Biryani [Joint]",
                              category: "Rice And Biryani",
                              description:
                                "|Serves2|Medium spicy|With-bone|Serves with Raita|",
                              imageId: "647f4d8fc466402667ba201240fdfce8",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "11808489",
                                    name: "Variation",
                                    variations: [
                                      {
                                        name: "Half",
                                        price: 205,
                                        default: 1,
                                        id: "38737444",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 290,
                                        id: "38737443",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "11808489",
                                        variationId: "38737444",
                                      },
                                    ],
                                    price: 20500,
                                    addonCombinations: [
                                      {
                                        groupId: "39731954",
                                        addonId: "27241776",
                                      },
                                      {
                                        groupId: "39731954",
                                        addonId: "27241777",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "11808489",
                                        variationId: "38737443",
                                      },
                                    ],
                                    price: 29000,
                                    addonCombinations: [
                                      {
                                        groupId: "39731954",
                                        addonId: "27241776",
                                      },
                                      {
                                        groupId: "39731954",
                                        addonId: "27241777",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "39731954",
                                  groupName: "Add on plate",
                                  choices: [
                                    {
                                      id: "27241776",
                                      name: "2 Plates",
                                      price: 1000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "27241777",
                                      name: "1 Plate",
                                      price: 500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              defaultPrice: 20500,
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "2550 ratings",
                                  ratingCountV2: "2.6K+",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "38469114",
                              menuFilterIds: [
                                "bestseller",
                                "NONVEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "56371431",
                              name: "Egg Biryani",
                              category: "Rice And Biryani",
                              description:
                                "| Serves 1-2 | Medium spicy | Served with Raita |",
                              imageId: "ee62079244964e08096ed0598c7895a4",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "11808485",
                                    name: "Variation",
                                    variations: [
                                      {
                                        name: "Half",
                                        price: 180,
                                        default: 1,
                                        id: "38737436",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 230,
                                        id: "38737435",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "11808485",
                                        variationId: "38737436",
                                      },
                                    ],
                                    price: 18000,
                                    addonCombinations: [
                                      {
                                        groupId: "39731949",
                                        addonId: "27241776",
                                      },
                                      {
                                        groupId: "39731949",
                                        addonId: "27241777",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "11808485",
                                        variationId: "38737435",
                                      },
                                    ],
                                    price: 23000,
                                    addonCombinations: [
                                      {
                                        groupId: "39731949",
                                        addonId: "27241776",
                                      },
                                      {
                                        groupId: "39731949",
                                        addonId: "27241777",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "39731949",
                                  groupName: "Add on plate",
                                  choices: [
                                    {
                                      id: "27241776",
                                      name: "2 Plates",
                                      price: 1000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "27241777",
                                      name: "1 Plate",
                                      price: 500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              defaultPrice: 18000,
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "1151 ratings",
                                  ratingCountV2: "1.2K+",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "4339526",
                              menuFilterIds: ["NONVEG", "offer", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "56371440",
                              name: "Foodpark Spl Biryani",
                              category: "Rice And Biryani",
                              imageId: "4677c40771704da43aa4508d0c126bb2",
                              inStock: 1,
                              price: 42000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "39731967",
                                  groupName: "Add on plate",
                                  choices: [
                                    {
                                      id: "27241776",
                                      name: "2 Plates",
                                      price: 1000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "27241777",
                                      name: "1 Plate",
                                      price: 500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "200 ratings",
                                  ratingCountV2: "200",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "4339557",
                              menuFilterIds: ["NONVEG", "offer", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "56371382",
                              name: "Spl Chicken Fried Rice",
                              category: "Fried Rice And Noodles",
                              description:
                                "| Serves 1-2 | Served with Curry/Gravy |",
                              imageId: "304239257274f223ca0214fc8826e26c",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "11808502",
                                    name: "Variation",
                                    variations: [
                                      {
                                        name: "Half",
                                        price: 215,
                                        default: 1,
                                        id: "38737471",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 290,
                                        id: "38737470",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "11808502",
                                        variationId: "38737471",
                                      },
                                    ],
                                    price: 21500,
                                    addonCombinations: [
                                      {
                                        groupId: "39731989",
                                        addonId: "27241776",
                                      },
                                      {
                                        groupId: "39731989",
                                        addonId: "27241777",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "11808502",
                                        variationId: "38737470",
                                      },
                                    ],
                                    price: 29000,
                                    addonCombinations: [
                                      {
                                        groupId: "39731989",
                                        addonId: "27241776",
                                      },
                                      {
                                        groupId: "39731989",
                                        addonId: "27241777",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "39731989",
                                  groupName: "Add on plate",
                                  choices: [
                                    {
                                      id: "27241776",
                                      name: "2 Plates",
                                      price: 1000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "27241777",
                                      name: "1 Plate",
                                      price: 500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              defaultPrice: 21500,
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "5825 ratings",
                                  ratingCountV2: "5.8K+",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "4339741",
                              menuFilterIds: [
                                "bestseller",
                                "NONVEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "77425284",
                              name: "Egg Fried Rice",
                              category: "Fried Rice And Noodles",
                              description: "| Serves 1-2 | Served with Raita |",
                              imageId: "e3e2c3c0c3d476c9d4af4daef2ae0bb1",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "11808498",
                                    name: "Variation",
                                    variations: [
                                      {
                                        name: "Half",
                                        price: 140,
                                        default: 1,
                                        id: "38737463",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 190,
                                        id: "38737462",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "11808498",
                                        variationId: "38737463",
                                      },
                                    ],
                                    price: 14000,
                                    addonCombinations: [
                                      {
                                        groupId: "39731982",
                                        addonId: "27241776",
                                      },
                                      {
                                        groupId: "39731982",
                                        addonId: "27241777",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "11808498",
                                        variationId: "38737462",
                                      },
                                    ],
                                    price: 19000,
                                    addonCombinations: [
                                      {
                                        groupId: "39731982",
                                        addonId: "27241776",
                                      },
                                      {
                                        groupId: "39731982",
                                        addonId: "27241777",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "39731982",
                                  groupName: "Add on plate",
                                  choices: [
                                    {
                                      id: "27241776",
                                      name: "2 Plates",
                                      price: 1000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "27241777",
                                      name: "1 Plate",
                                      price: 500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              defaultPrice: 14000,
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "1599 ratings",
                                  ratingCountV2: "1.6K+",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "4339531",
                              menuFilterIds: [
                                "bestseller",
                                "NONVEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "28709848",
                              name: "Paneer Cashew Curry",
                              category: "Main Course",
                              description: "| Medium spicy | Gravy |",
                              imageId: "33876f1cfd8fca6766bab0cd9ed66344",
                              inStock: 1,
                              isVeg: 1,
                              price: 24000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "39731865",
                                  groupName: "Add on plate",
                                  choices: [
                                    {
                                      id: "27241776",
                                      name: "2 Plates",
                                      price: 1000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "27241777",
                                      name: "1 Plate",
                                      price: 500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "728 ratings",
                                  ratingCountV2: "728",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "4339658",
                              menuFilterIds: ["VEG", "offer", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "56371407",
                              name: "Chicken Curry Bone",
                              category: "Main Course",
                              description:
                                "| Serves 1-2 | Medium spicy | With-bone |",
                              imageId: "664edcc660e84cfcc7b1c0a794eeaa79",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "11808478",
                                    name: "Variation",
                                    variations: [
                                      {
                                        name: "Half",
                                        price: 170,
                                        default: 1,
                                        id: "57707736",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 260,
                                        id: "38737426",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "11808478",
                                        variationId: "57707736",
                                      },
                                    ],
                                    price: 17000,
                                    addonCombinations: [
                                      {
                                        groupId: "39731897",
                                        addonId: "27241776",
                                      },
                                      {
                                        groupId: "39731897",
                                        addonId: "27241777",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "11808478",
                                        variationId: "38737426",
                                      },
                                    ],
                                    price: 26000,
                                    addonCombinations: [
                                      {
                                        groupId: "39731897",
                                        addonId: "27241776",
                                      },
                                      {
                                        groupId: "39731897",
                                        addonId: "27241777",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "39731897",
                                  groupName: "Add on plate",
                                  choices: [
                                    {
                                      id: "27241776",
                                      name: "2 Plates",
                                      price: 1000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "27241777",
                                      name: "1 Plate",
                                      price: 500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              defaultPrice: 17000,
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "1071 ratings",
                                  ratingCountV2: "1.1K+",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "4339452",
                              menuFilterIds: [
                                "bestseller",
                                "NONVEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "31834442",
                              name: "Chilli Chicken Dry",
                              category: "Main Course",
                              description: "| Medium spicy | Dry |",
                              imageId: "38d6849ea4f3829da65c765eeaceb5d9",
                              inStock: 1,
                              price: 27000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "39731920",
                                  groupName: "Add on plate",
                                  choices: [
                                    {
                                      id: "27241776",
                                      name: "2 Plates",
                                      price: 1000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "27241777",
                                      name: "1 Plate",
                                      price: 500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "776 ratings",
                                  ratingCountV2: "776",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "4339494",
                              menuFilterIds: ["NONVEG", "offer", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "31834446",
                              name: "Chicken 65",
                              category: "Main Course",
                              description: "| Medium spicy | Dry |",
                              imageId: "fd0231de9320c50b52a9125f68eb022c",
                              inStock: 1,
                              price: 27000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "39731915",
                                  groupName: "Add on plate",
                                  choices: [
                                    {
                                      id: "27241776",
                                      name: "2 Plates",
                                      price: 1000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "27241777",
                                      name: "1 Plate",
                                      price: 500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "487 ratings",
                                  ratingCountV2: "487",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              imageBadges: [
                                {
                                  imageId: "merch_bau/High%20Protein%201_1.png",
                                },
                              ],
                              parentId: "4339445",
                              menuFilterIds: [
                                "EATRIGHT",
                                "NONVEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      type: "CATEGORY_TYPE_RECOMMENDED",
                      subtitleSuffix: {},
                      categoryId: "-1",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Main Course",
                      categories: [
                        {
                          title: "Chicken Dry  Main Course",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371410",
                                  name: "Chicken Fry With Bone",
                                  category: "Main Course",
                                  description:
                                    "Juicy chicken with bone, fried to perfection - a great start to your meal!",
                                  imageId: "rksyvqddff8dsrioypvf",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808481",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 210,
                                            default: 1,
                                            id: "111710807",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 270,
                                            id: "38737430",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808481",
                                            variationId: "111710807",
                                          },
                                        ],
                                        price: 21000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731911",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731911",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808481",
                                            variationId: "38737430",
                                          },
                                        ],
                                        price: 27000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731911",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731911",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731911",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 21000,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "324 ratings",
                                      ratingCountV2: "324",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339466",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "77425235",
                                  name: "Chicken Dum Joint [2 Piceces]",
                                  category: "Main Course",
                                  inStock: 1,
                                  price: 21000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731910",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 21000,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "166 ratings",
                                      ratingCountV2: "166",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  isBolt: true,
                                  boltImageId:
                                    "bolt/bolt-tag/bolt_menu_tag.png",
                                  parentId: "38469110",
                                  menuFilterIds: ["BOLT", "NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834442",
                                  name: "Chilli Chicken Dry",
                                  category: "Main Course",
                                  description: "| Medium spicy | Dry |",
                                  imageId: "38d6849ea4f3829da65c765eeaceb5d9",
                                  inStock: 1,
                                  price: 27000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731920",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.0",
                                      ratingCount: "776 ratings",
                                      ratingCountV2: "776",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339494",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371413",
                                  name: "Chicken Joint Fry  [2 Piceces]",
                                  category: "Main Course",
                                  imageId: "967135260ff78317c09e8a0ab887116e",
                                  inStock: 1,
                                  price: 22000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731912",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 22000,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.9",
                                      ratingCount: "275 ratings",
                                      ratingCountV2: "275",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339471",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834446",
                                  name: "Chicken 65",
                                  category: "Main Course",
                                  description: "| Medium spicy | Dry |",
                                  imageId: "fd0231de9320c50b52a9125f68eb022c",
                                  inStock: 1,
                                  price: 27000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731915",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.0",
                                      ratingCount: "487 ratings",
                                      ratingCountV2: "487",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  imageBadges: [
                                    {
                                      imageId:
                                        "merch_bau/High%20Protein%201_1.png",
                                    },
                                  ],
                                  parentId: "4339445",
                                  menuFilterIds: [
                                    "EATRIGHT",
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371411",
                                  name: "Chicken Fry With Boneless",
                                  category: "Main Course",
                                  description: "| Medium spicy |",
                                  imageId: "c4530b66eed2288e1160b79d219f4c7e",
                                  inStock: 1,
                                  price: 27000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731916",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.0",
                                      ratingCount: "137 ratings",
                                      ratingCountV2: "137",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339467",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834449",
                                  name: "Chicken Roast",
                                  category: "Main Course",
                                  description:
                                    "Moist, succulent chicken slow roasted to perfection with a savory crust on top.",
                                  inStock: 1,
                                  price: 29000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731925",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "98 ratings",
                                      ratingCountV2: "98",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339487",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371414",
                                  name: "Chicken Joint Rost  [2 Piceces]",
                                  category: "Main Course",
                                  imageId: "65255cfe5c7953b882111d6a98cd6be5",
                                  inStock: 1,
                                  price: 23000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731913",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 23000,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "152 ratings",
                                      ratingCountV2: "152",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339476",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834453",
                                  name: "Ginger Chicken",
                                  category: "Main Course",
                                  description:
                                    "Tender chicken cooked in delicate ginger-infused sauce.",
                                  imageId: "42a090779266586e71aa5fe4b1ce52e7",
                                  inStock: 1,
                                  price: 28000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731924",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "80 ratings",
                                      ratingCountV2: "80",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339562",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371415",
                                  name: "Chicken Manchuriya Dry",
                                  category: "Main Course",
                                  description: "| Medium spicy | Dry |",
                                  imageId: "aef5f13e6249429dba3ed55abaf63984",
                                  inStock: 1,
                                  price: 27000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731917",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "199 ratings",
                                      ratingCountV2: "199",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339481",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834456",
                                  name: "Chicken Fried Wings",
                                  category: "Main Course",
                                  description:
                                    "Crispy fried chicken wings that are packed with flavor.",
                                  imageId: "37a19433a1cd36cb944418511a7e2623",
                                  inStock: 1,
                                  price: 31000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731923",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "76 ratings",
                                      ratingCountV2: "76",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339461",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834443",
                                  name: "Chilli Chicken Wet",
                                  category: "Main Course",
                                  description: "| Spicy | Gravy |",
                                  imageId: "31da230728b570624894aa1c19edeb41",
                                  inStock: 1,
                                  price: 27000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731922",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.0",
                                      ratingCount: "225 ratings",
                                      ratingCountV2: "225",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339496",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371416",
                                  name: "Chicken Manchuriya Wet",
                                  category: "Main Course",
                                  imageId: "515e45339ba1cd628be746c755218d85",
                                  inStock: 1,
                                  price: 27000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731918",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "124 ratings",
                                      ratingCountV2: "124",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339482",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371418",
                                  name: "Pepper Chicken",
                                  category: "Main Course",
                                  description:
                                    "A succulent and flavorful Chinese dish that packs a mouth-watering punch.",
                                  imageId: "fb623d5586cd82dddf914102742f9fec",
                                  inStock: 1,
                                  price: 29000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731926",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "2.5",
                                      ratingCount: "11 ratings",
                                      ratingCountV2: "11",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#FFF0CD", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_low",
                                      ratingTextColor: "rating_low",
                                      ratingCountTextColor: "rating_low",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  imageBadges: [
                                    {
                                      imageId:
                                        "merch_bau/High%20Protein%201_1.png",
                                    },
                                  ],
                                  parentId: "4339686",
                                  menuFilterIds: [
                                    "EATRIGHT",
                                    "NONVEG",
                                    "offer",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371417",
                                  name: "Chicken Mogalai",
                                  category: "Main Course",
                                  description: "| Medium spicy | With-bone |",
                                  inStock: 1,
                                  price: 30000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731927",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.3",
                                      ratingCount: "18 ratings",
                                      ratingCountV2: "18",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339484",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834455",
                                  name: "Chicken Winglets",
                                  category: "Main Course",
                                  inStock: 1,
                                  price: 30000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731919",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "138 ratings",
                                      ratingCountV2: "138",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339492",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "130926535",
                                  name: "Chikken Mogalai Dry Item",
                                  category: "Main Course",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 23000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "17 ratings",
                                      ratingCountV2: "17",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "76089751",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "77425238",
                                  name: "Chicken Hong Kong [Special]",
                                  category: "Main Course",
                                  inStock: 1,
                                  price: 31000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731930",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666135",
                                      groupName:
                                        "Chicken Joint Fry [2 Piceces] @15% Off!",
                                      choices: [
                                        {
                                          id: "45392059",
                                          name: "Chicken Joint Fry [2 Piceces]",
                                          price: 17900,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666136",
                                      groupName:
                                        "Chicken Joint Rost [2 Piceces] @15% Off!",
                                      choices: [
                                        {
                                          id: "45392060",
                                          name: "Chicken Joint Rost [2 Piceces]",
                                          price: 18700,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666137",
                                      groupName:
                                        "Chicken Manchuriya Dry @15% Off!",
                                      choices: [
                                        {
                                          id: "45392056",
                                          name: "Chicken Manchuriya Dry",
                                          price: 22000,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666139",
                                      groupName:
                                        "Chicken Fry With Bone @15% Off!",
                                      choices: [
                                        {
                                          id: "45392057",
                                          name: "Chicken Fry With Bone",
                                          price: 22100,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666140",
                                      groupName:
                                        "Chicken Fry With Boneless @15% Off!",
                                      choices: [
                                        {
                                          id: "45392058",
                                          name: "Chicken Fry With Boneless",
                                          price: 22100,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "26 ratings",
                                      ratingCountV2: "26",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339468",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371420",
                                  name: "Thumsup Chicken",
                                  category: "Main Course",
                                  inStock: 1,
                                  price: 30000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731929",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.2",
                                      ratingCount: "10 ratings",
                                      ratingCountV2: "10",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339760",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "17459056",
                        },
                        {
                          title: "Chicken Main Course",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371407",
                                  name: "Chicken Curry Bone",
                                  category: "Main Course",
                                  description:
                                    "| Serves 1-2 | Medium spicy | With-bone |",
                                  imageId: "664edcc660e84cfcc7b1c0a794eeaa79",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808478",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 170,
                                            default: 1,
                                            id: "57707736",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 260,
                                            id: "38737426",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808478",
                                            variationId: "57707736",
                                          },
                                        ],
                                        price: 17000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731897",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731897",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808478",
                                            variationId: "38737426",
                                          },
                                        ],
                                        price: 26000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731897",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731897",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731897",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 17000,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "1071 ratings",
                                      ratingCountV2: "1.1K+",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  isBolt: true,
                                  boltImageId:
                                    "bolt/bolt-tag/bolt_menu_tag.png",
                                  parentId: "4339452",
                                  menuFilterIds: [
                                    "BOLT",
                                    "bestseller",
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371404",
                                  name: "Chicken Curry Boneles",
                                  category: "Main Course",
                                  description:
                                    "A tender and flavorful curry made with juicy boneless chicken.",
                                  imageId: "d05925b59bdebc61e63155a46102da47",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808479",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 210,
                                            default: 1,
                                            id: "38737428",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 300,
                                            id: "38737427",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808479",
                                            variationId: "38737428",
                                          },
                                        ],
                                        price: 21000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731898",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731898",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808479",
                                            variationId: "38737427",
                                          },
                                        ],
                                        price: 30000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731898",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731898",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731898",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 21000,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "509 ratings",
                                      ratingCountV2: "509",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339454",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "77425229",
                                  name: "Chicken Joint Fry [2 PIcecs] Curry",
                                  category: "Main Course",
                                  description: "| Spicy | With-bone |",
                                  inStock: 1,
                                  price: 20000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731899",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "471 ratings",
                                      ratingCountV2: "471",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339472",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834431",
                                  name: "Butter Chicken",
                                  category: "Main Course",
                                  description:
                                    "A rich and creamy Indian delicacy perfect for indulging in during a hearty main course.",
                                  imageId: "aewftmy6xmooqg9ztqx4",
                                  inStock: 1,
                                  price: 29000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731900",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "132 ratings",
                                      ratingCountV2: "132",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339426",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834440",
                                  name: "Chicken Masala",
                                  category: "Main Course",
                                  description:
                                    "A flavorful and savory non-veg curry with tender chicken.",
                                  imageId: "zlmevcp5sevdcesyacbi",
                                  inStock: 1,
                                  price: 30000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731903",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666044",
                                      groupName:
                                        "Chicken Manchuriya Dry @15% Off!",
                                      choices: [
                                        {
                                          id: "45392056",
                                          name: "Chicken Manchuriya Dry",
                                          price: 22000,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666045",
                                      groupName:
                                        "Chicken Fry With Bone @15% Off!",
                                      choices: [
                                        {
                                          id: "45392057",
                                          name: "Chicken Fry With Bone",
                                          price: 22100,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666047",
                                      groupName:
                                        "Chicken Fry With Boneless @15% Off!",
                                      choices: [
                                        {
                                          id: "45392058",
                                          name: "Chicken Fry With Boneless",
                                          price: 22100,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.3",
                                      ratingCount: "31 ratings",
                                      ratingCountV2: "31",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339483",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371405",
                                  name: "Cashewnut Chicken Dry",
                                  category: "Main Course",
                                  inStock: 1,
                                  price: 31000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731901",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.2",
                                      ratingCount: "18 ratings",
                                      ratingCountV2: "18",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339440",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834438",
                                  name: "Kadai Chicken",
                                  category: "Main Course",
                                  description:
                                    "Tender chicken cooked in aromatic spices & herbs, creating a savory and flavorful main course.",
                                  imageId: "229bb0c1166a174f381c51288134fdfd",
                                  inStock: 1,
                                  price: 30000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731906",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "45 ratings",
                                      ratingCountV2: "45",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339581",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371406",
                                  name: "Cashewnut Chicken Wet",
                                  category: "Main Course",
                                  inStock: 1,
                                  price: 30000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731902",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "2.7",
                                      ratingCount: "34 ratings",
                                      ratingCountV2: "34",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#FFF0CD", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_low",
                                      ratingTextColor: "rating_low",
                                      ratingCountTextColor: "rating_low",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  isBolt: true,
                                  boltImageId:
                                    "bolt/bolt-tag/bolt_menu_tag.png",
                                  parentId: "4339441",
                                  menuFilterIds: ["BOLT", "NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "17459055",
                        },
                        {
                          title: "Veg Dry Main Course",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371401",
                                  name: "Veg Manchuriya",
                                  category: "Main Course",
                                  description:
                                    "A delectable veg dish in the Manchuriya category that is sure to tantalize your taste buds.",
                                  imageId: "6a31bd47aa6cabf44b3faa9fa89d962e",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731868",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "863 ratings",
                                      ratingCountV2: "863",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339790",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371398",
                                  name: "Panner 65",
                                  category: "Main Course",
                                  description:
                                    "A delectable and savory dish with succulent cubes of paneer.",
                                  imageId: "zojuzdszwvrcsvvumi5v",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 26000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731883",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.6",
                                      ratingCount: "77 ratings",
                                      ratingCountV2: "77",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339677",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371400",
                                  name: "Panner Manchuriya",
                                  category: "Main Course",
                                  imageId: "714e3553d5ba0ddd87cdcd96202a6db5",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 25000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731881",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "133 ratings",
                                      ratingCountV2: "133",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339679",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371402",
                                  name: "Veg Manchuriya Cashew",
                                  category: "Main Course",
                                  description: "| Medium spicy |",
                                  imageId: "123c573631b3c8b4950d39aa383d9aad",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 24000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731880",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "89 ratings",
                                      ratingCountV2: "89",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339791",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371397",
                                  name: "Mashroom Manchuriya",
                                  category: "Main Course",
                                  imageId: "9ae0c0303b0836b827bf69e98493b65c",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 24000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731879",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "71 ratings",
                                      ratingCountV2: "71",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339601",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371396",
                                  name: "Mashroom 65",
                                  category: "Main Course",
                                  description:
                                    "A indulgent hearty curry full of aromatic flavors and a delightful combination of textures.",
                                  imageId: "c025dbb1049ba62c0b79cbc4696fe81c",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 24000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731878",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.7",
                                      ratingCount: "52 ratings",
                                      ratingCountV2: "52",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339600",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371390",
                                  name: "Baby Corn 65",
                                  category: "Main Course",
                                  description:
                                    "Crispy and flavorful baby corn fritters perfect for starting your meal on a high note.",
                                  imageId: "84106864e199a6df49084c5d956b9fee",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 25000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731870",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "38 ratings",
                                      ratingCountV2: "38",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339407",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834481",
                                  name: "Kadai Mushroom",
                                  category: "Main Course",
                                  description:
                                    "Savory mushrooms cooked in a rich and aromatic blend of flavorful spices.",
                                  imageId: "dd5610b4fdd39f95a124fff0728d674d",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 26000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731882",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "21 ratings",
                                      ratingCountV2: "21",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339582",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371392",
                                  name: "Baby Corn Manchuriya",
                                  category: "Main Course",
                                  imageId: "a17f2970206e458bbd1885243054d5eb",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 24000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731873",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.0",
                                      ratingCount: "39 ratings",
                                      ratingCountV2: "39",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339411",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371395",
                                  name: "Mashaoom Cashew Fry",
                                  category: "Main Course",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 27000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731885",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.0",
                                      ratingCount: "13 ratings",
                                      ratingCountV2: "13",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339598",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371399",
                                  name: "Panner Cashew Fry",
                                  category: "Main Course",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 28000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731886",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "48 ratings",
                                      ratingCountV2: "48",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339678",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371393",
                                  name: "Kadai Baby Corn",
                                  category: "Main Course",
                                  imageId: "b28e4a77343f1740f0c12696c55349c7",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 27000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731876",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.5",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339580",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371394",
                                  name: "Kadai Panner",
                                  category: "Main Course",
                                  description:
                                    "A fragrant and flavorful curry made with tender chunks of paneer.",
                                  imageId: "q262a8tqh3zyr0la47ed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 27000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731884",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "18 ratings",
                                      ratingCountV2: "18",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339584",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371391",
                                  name: "Baby Corn Cashew Fry",
                                  category: "Main Course",
                                  imageId: "cb5778b17a51c16136d077925a44e073",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 27000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731877",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "2.2",
                                      ratingCount: "14 ratings",
                                      ratingCountV2: "14",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#FFF0CD", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_low",
                                      ratingTextColor: "rating_low",
                                      ratingCountTextColor: "rating_low",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339408",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "17459053",
                        },
                        {
                          title: "Veg Main Course",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28709846",
                                  name: "Paneer Butter Masala",
                                  category: "Main Course",
                                  description:
                                    "A creamy and indulgent Indian dish that's sure to satisfy your taste buds.",
                                  imageId: "82035846abf4bf789d9e471276f8ce12",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 22000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731861",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "380 ratings",
                                      ratingCountV2: "380",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  isBolt: true,
                                  boltImageId:
                                    "bolt/bolt-tag/bolt_menu_tag.png",
                                  parentId: "4339657",
                                  menuFilterIds: [
                                    "BOLT",
                                    "VEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28709848",
                                  name: "Paneer Cashew Curry",
                                  category: "Main Course",
                                  description: "| Medium spicy | Gravy |",
                                  imageId: "33876f1cfd8fca6766bab0cd9ed66344",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 24000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731865",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "728 ratings",
                                      ratingCountV2: "728",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339658",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28709856",
                                  name: "Mushroom Curry",
                                  category: "Main Course",
                                  description: "| Medium spicy |",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2025/8/26/030773da-7d13-485c-a581-115c1103eaba_cbff444a-87cf-4138-a451-58d22d77c8de.jpeg",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 21000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731859",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "224 ratings",
                                      ratingCountV2: "224",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339628",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28709844",
                                  name: "Tomato Cashew Curry",
                                  category: "Main Course",
                                  description: "| Serves 1-2 | Medium spicy |",
                                  imageId: "310a68b8a7d603106388f5119f4c38e4",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 23000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731862",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.9",
                                      ratingCount: "120 ratings",
                                      ratingCountV2: "120",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339761",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371388",
                                  name: "Veg Manchuriya Cashew Curry",
                                  category: "Main Course",
                                  description: "| Medium spicy |",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 21000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731860",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "55 ratings",
                                      ratingCountV2: "55",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  isBolt: true,
                                  boltImageId:
                                    "bolt/bolt-tag/bolt_menu_tag.png",
                                  parentId: "4339792",
                                  menuFilterIds: [
                                    "BOLT",
                                    "VEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28709863",
                                  name: "Cashew Curry",
                                  category: "Main Course",
                                  description:
                                    "Succulent vegetables and aromatic spices come together in this delicious cashew-based curry.",
                                  imageId: "7a6ac89b5e5e55a3f5c20cc75f3cc917",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 28000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731866",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "22 ratings",
                                      ratingCountV2: "22",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339438",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28709853",
                                  name: "Kadai Veg Curry",
                                  category: "Main Course",
                                  description:
                                    "A classic vegetarian main course simmered with aromatic spices and vegetables.",
                                  imageId: "9f2999504412044b0431a5a7a651faf3",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 26000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731863",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.3",
                                      ratingCount: "29 ratings",
                                      ratingCountV2: "29",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339585",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371387",
                                  name: "Mashaoom With Cashew Curry",
                                  category: "Main Course",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 26000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731864",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.3",
                                      ratingCount: "37 ratings",
                                      ratingCountV2: "37",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339599",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28709843",
                                  name: "Mixed Veg Curry",
                                  category: "Main Course",
                                  description:
                                    "A flavorful vegetable curry that will tantalize your taste buds with its bold flavors and delicious aroma.",
                                  imageId: "ee487010ccbee3e33d6633f5d2a7c4f7",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 27000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731867",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "2.3",
                                      ratingCount: "9 ratings",
                                      ratingCountV2: "9",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#FFF0CD", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_low",
                                      ratingTextColor: "rating_low",
                                      ratingCountTextColor: "rating_low",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  isBolt: true,
                                  boltImageId:
                                    "bolt/bolt-tag/bolt_menu_tag.png",
                                  parentId: "4339623",
                                  menuFilterIds: ["BOLT", "VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371383",
                                  name: "Baby Corn Curry",
                                  category: "Main Course",
                                  imageId: "eb2985c44b9030741abf5fb25e943269",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 23000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731853",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.9",
                                      ratingCount: "19 ratings",
                                      ratingCountV2: "19",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  isBolt: true,
                                  boltImageId:
                                    "bolt/bolt-tag/bolt_menu_tag.png",
                                  parentId: "4339409",
                                  menuFilterIds: ["BOLT", "VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371385",
                                  name: "Baby Corn With Cashew",
                                  category: "Main Course",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 26000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731858",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "30 ratings",
                                      ratingCountV2: "30",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339412",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371389",
                                  name: "Veg Manchuriya Curry",
                                  category: "Main Course",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 19000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731856",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "40 ratings",
                                      ratingCountV2: "40",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339793",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "17459052",
                        },
                        {
                          title: "Egg Dry And Curry Main Course",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834465",
                                  name: "Egg Curry",
                                  category: "Main Course",
                                  description:
                                    "A savory and satisfying dish featuring tender, flavorful eggs.",
                                  imageId: "qg828ltlggwypaci7irr",
                                  inStock: 1,
                                  price: 12000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731890",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "225 ratings",
                                      ratingCountV2: "225",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  isBolt: true,
                                  boltImageId:
                                    "bolt/bolt-tag/bolt_menu_tag.png",
                                  parentId: "4339530",
                                  menuFilterIds: [
                                    "BOLT",
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834470",
                                  name: "Chilli Egg",
                                  category: "Main Course",
                                  description:
                                    "A savory and satisfying egg dish perfect to start your meal.",
                                  imageId: "283d262c9c6fff675ff600cbf7cc4f86",
                                  inStock: 1,
                                  price: 18000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731895",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.5",
                                      ratingCount: "83 ratings",
                                      ratingCountV2: "83",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339497",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "38778251",
                                  name: "Egg 65",
                                  category: "Main Course",
                                  description:
                                    "Crispy fried egg bites perfect to start your meal.",
                                  inStock: 1,
                                  price: 15000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731894",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "35 ratings",
                                      ratingCountV2: "35",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339524",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834471",
                                  name: "Egg Burji",
                                  category: "Main Course",
                                  description:
                                    "A scrumptious egg dish perfect for breakfast, lunch, or dinner!",
                                  imageId: "d8ayyfgnp38ahi1avnfj",
                                  inStock: 1,
                                  price: 14000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731892",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "60 ratings",
                                      ratingCountV2: "60",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339527",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371403",
                                  name: "Egg Omlet",
                                  category: "Main Course",
                                  inStock: 1,
                                  price: 10000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731889",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "86 ratings",
                                      ratingCountV2: "86",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339539",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834466",
                                  name: "Egg Fry",
                                  category: "Main Course",
                                  description:
                                    "A delectable egg dish that is perfect to start any meal.",
                                  inStock: 1,
                                  price: 13000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731891",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "35 ratings",
                                      ratingCountV2: "35",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339534",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834469",
                                  name: "Egg Masala",
                                  category: "Main Course",
                                  description:
                                    "A rich and flavorful egg curry perfect with rice or bread.",
                                  inStock: 1,
                                  price: 14000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731893",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "45 ratings",
                                      ratingCountV2: "45",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  isBolt: true,
                                  boltImageId:
                                    "bolt/bolt-tag/bolt_menu_tag.png",
                                  parentId: "4339536",
                                  menuFilterIds: [
                                    "BOLT",
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834468",
                                  name: "Boiled Egg",
                                  category: "Main Course",
                                  description:
                                    "A perfectly cooked, simple and satisfying boiled egg.",
                                  inStock: 1,
                                  price: 10000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731888",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "2.9",
                                      ratingCount: "64 ratings",
                                      ratingCountV2: "64",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#FFF0CD", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_low",
                                      ratingTextColor: "rating_low",
                                      ratingCountTextColor: "rating_low",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339416",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "17459054",
                        },
                        {
                          title: "Prawn Dry And Curry Main Course",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371427",
                                  name: "Prawn 65",
                                  category: "Main Course",
                                  description:
                                    "A crispy, flavorful starter with juicy prawns.",
                                  imageId: "f68339f1d533a4314638daaffb5dd0d5",
                                  inStock: 1,
                                  price: 31000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731941",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "6 ratings",
                                      ratingCountV2: "6",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339695",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371428",
                                  name: "Prawn Curry",
                                  category: "Main Course",
                                  description:
                                    "A flavorful and aromatic seafood curry with tender prawns.",
                                  imageId: "04fdd6e8b83d6b29cdc8c033e02c9c87",
                                  inStock: 1,
                                  price: 30000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731940",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.4",
                                      ratingCount: "54 ratings",
                                      ratingCountV2: "54",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339697",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371429",
                                  name: "Prawn Fry",
                                  category: "Main Course",
                                  description: "| Medium spicy |",
                                  inStock: 1,
                                  price: 31000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731942",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.9",
                                      ratingCount: "37 ratings",
                                      ratingCountV2: "37",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339699",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371425",
                                  name: "Cashew Prawn",
                                  category: "Main Course",
                                  inStock: 1,
                                  price: 35000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731946",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.2",
                                      ratingCount: "6 ratings",
                                      ratingCountV2: "6",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339442",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371426",
                                  name: "Chilli Prawn",
                                  category: "Main Course",
                                  description:
                                    "Succulent and savory seafood starter, perfect for any occasion.",
                                  imageId: "c0d7b48163da0c40d05a183d30d36184",
                                  inStock: 1,
                                  price: 33000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731945",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "2.9",
                                      ratingCount: "7 ratings",
                                      ratingCountV2: "7",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#FFF0CD", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_low",
                                      ratingTextColor: "rating_low",
                                      ratingCountTextColor: "rating_low",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339500",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371430",
                                  name: "Prawn Masala",
                                  category: "Main Course",
                                  inStock: 1,
                                  price: 32000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731944",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339701",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "17459059",
                        },
                        {
                          title: "Mutton Dry And Curry Main Course",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371421",
                                  name: "Mutton Curry",
                                  category: "Main Course",
                                  description:
                                    "A classic Indian curry featuring tender mutton in rich and flavorful sauce.",
                                  imageId: "857577920166a50e6c0c8732c9781c49",
                                  inStock: 1,
                                  price: 32000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731931",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666116",
                                      groupName:
                                        "Chicken Joint Fry [2 Piceces] @15% Off!",
                                      choices: [
                                        {
                                          id: "45392059",
                                          name: "Chicken Joint Fry [2 Piceces]",
                                          price: 17900,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666118",
                                      groupName:
                                        "Chicken Joint Rost [2 Piceces] @15% Off!",
                                      choices: [
                                        {
                                          id: "45392060",
                                          name: "Chicken Joint Rost [2 Piceces]",
                                          price: 18700,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666120",
                                      groupName:
                                        "Chicken Manchuriya Dry @15% Off!",
                                      choices: [
                                        {
                                          id: "45392056",
                                          name: "Chicken Manchuriya Dry",
                                          price: 22000,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666121",
                                      groupName:
                                        "Chicken Fry With Bone @15% Off!",
                                      choices: [
                                        {
                                          id: "45392057",
                                          name: "Chicken Fry With Bone",
                                          price: 22100,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666123",
                                      groupName:
                                        "Chicken Fry With Boneless @15% Off!",
                                      choices: [
                                        {
                                          id: "45392058",
                                          name: "Chicken Fry With Boneless",
                                          price: 22100,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "104 ratings",
                                      ratingCountV2: "104",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339634",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834459",
                                  name: "Mutton Fry",
                                  category: "Main Course",
                                  description:
                                    "Succulent mutton pieces fried to perfection, with a crisp outer layer and juicy, tender meat inside.",
                                  inStock: 1,
                                  price: 33000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731933",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.0",
                                      ratingCount: "33 ratings",
                                      ratingCountV2: "33",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339638",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834460",
                                  name: "Mutton Masala",
                                  category: "Main Course",
                                  description:
                                    "A tantalizing Indian mutton curry, rich in flavor and tradition.",
                                  inStock: 1,
                                  price: 33000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731934",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "14 ratings",
                                      ratingCountV2: "14",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339642",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834464",
                                  name: "Cashew Mutton",
                                  category: "Main Course",
                                  price: 36000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731936",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 10 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "7 ratings",
                                      ratingCountV2: "7",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339439",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834463",
                                  name: "Chilli Mutton",
                                  category: "Main Course",
                                  description:
                                    "Aromatic and flavorful mutton perfect for snacking.",
                                  price: 34000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731935",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 10 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339498",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834462",
                                  name: "Mutton 65",
                                  category: "Main Course",
                                  description:
                                    "A succulent and flavorful non-veg starter that is sure to tantalize the taste buds.",
                                  price: 33000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731932",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 10 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  itemPriceStrikeOff: true,
                                  isBolt: true,
                                  boltImageId:
                                    "bolt/bolt-tag/bolt_menu_tag.png",
                                  parentId: "4339632",
                                  menuFilterIds: ["BOLT", "NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "17459057",
                        },
                        {
                          title: "Fish Main Course",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371422",
                                  name: "Fish Boneless Curry",
                                  category: "Main Course",
                                  imageId: "5dabbf6665fc92e70e9be24e18752db9",
                                  inStock: 1,
                                  price: 28000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731937",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.7",
                                      ratingCount: "66 ratings",
                                      ratingCountV2: "66",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339548",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371423",
                                  name: "Fish Boneless Fry",
                                  category: "Main Course",
                                  inStock: 1,
                                  price: 29000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731938",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.9",
                                      ratingCount: "37 ratings",
                                      ratingCountV2: "37",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339549",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371424",
                                  name: "Fish Rost With Cashew",
                                  category: "Main Course",
                                  inStock: 1,
                                  price: 31000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731939",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "11 ratings",
                                      ratingCountV2: "11",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339552",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "17459058",
                        },
                      ],
                      image: "82035846abf4bf789d9e471276f8ce12",
                      categoryId: "17459049",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Rice And Biryani",
                      categories: [
                        {
                          title: "Biryani ",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "77425277",
                                  name: "Chicken Fry-bit Biryani",
                                  category: "Rice And Biryani",
                                  description:
                                    "| Serves1-2 | Medium spicy | With-bone | Served with Raita |",
                                  imageId: "0bdac7be07e6a8aa74dd5e3be82a5d23",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808488",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 215,
                                            default: 1,
                                            id: "38737442",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 300,
                                            id: "38737441",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808488",
                                            variationId: "38737442",
                                          },
                                        ],
                                        price: 21500,
                                        addonCombinations: [
                                          {
                                            groupId: "39731953",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731953",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808488",
                                            variationId: "38737441",
                                          },
                                        ],
                                        price: 30000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731953",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731953",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731953",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 21500,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "13294 ratings",
                                      ratingCountV2: "13.3K+",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339463",
                                  menuFilterIds: [
                                    "bestseller",
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28709779",
                                  name: "Chicken Boneless Biryani",
                                  category: "Rice And Biryani",
                                  description:
                                    "| Serves 1-2 | Medium spicy | Served with Raita |",
                                  imageId: "03869e9d5f6559125cd1fce064a6aefb",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808486",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 225,
                                            default: 1,
                                            id: "38737438",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 310,
                                            id: "38737437",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808486",
                                            variationId: "38737438",
                                          },
                                        ],
                                        price: 22500,
                                        addonCombinations: [
                                          {
                                            groupId: "39731951",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731951",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808486",
                                            variationId: "38737437",
                                          },
                                        ],
                                        price: 31000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731951",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731951",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731951",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 22500,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "7653 ratings",
                                      ratingCountV2: "7.7K+",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339447",
                                  menuFilterIds: [
                                    "bestseller",
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834420",
                                  name: "Joint Fry Biryani",
                                  category: "Rice And Biryani",
                                  description:
                                    "| Serves1-2 | Medium spicy | With-bone | Served with Raita |",
                                  imageId: "74827b67bbffd7578efa5264cdeac38a",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808490",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 215,
                                            default: 1,
                                            id: "38737446",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 300,
                                            id: "38737445",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808490",
                                            variationId: "38737446",
                                          },
                                        ],
                                        price: 21500,
                                        addonCombinations: [
                                          {
                                            groupId: "39731956",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731956",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808490",
                                            variationId: "38737445",
                                          },
                                        ],
                                        price: 30000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731956",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731956",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731956",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 21500,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "2491 ratings",
                                      ratingCountV2: "2.5K+",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339577",
                                  menuFilterIds: [
                                    "bestseller",
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "77425278",
                                  name: "Hyd Dum Biryani [Joint]",
                                  category: "Rice And Biryani",
                                  description:
                                    "|Serves2|Medium spicy|With-bone|Serves with Raita|",
                                  imageId: "647f4d8fc466402667ba201240fdfce8",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808489",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 205,
                                            default: 1,
                                            id: "38737444",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 290,
                                            id: "38737443",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808489",
                                            variationId: "38737444",
                                          },
                                        ],
                                        price: 20500,
                                        addonCombinations: [
                                          {
                                            groupId: "39731954",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731954",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808489",
                                            variationId: "38737443",
                                          },
                                        ],
                                        price: 29000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731954",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731954",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731954",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 20500,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "2550 ratings",
                                      ratingCountV2: "2.6K+",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "38469114",
                                  menuFilterIds: [
                                    "bestseller",
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "77425281",
                                  name: "Family Pack [With All Items]",
                                  category: "Rice And Biryani",
                                  imageId: "543f7fb8a61f7f5fb3bfa86e047c6bdf",
                                  inStock: 1,
                                  price: 202900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731968",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339544",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371431",
                                  name: "Egg Biryani",
                                  category: "Rice And Biryani",
                                  description:
                                    "| Serves 1-2 | Medium spicy | Served with Raita |",
                                  imageId: "ee62079244964e08096ed0598c7895a4",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808485",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 180,
                                            default: 1,
                                            id: "38737436",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 230,
                                            id: "38737435",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808485",
                                            variationId: "38737436",
                                          },
                                        ],
                                        price: 18000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731949",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731949",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808485",
                                            variationId: "38737435",
                                          },
                                        ],
                                        price: 23000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731949",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731949",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731949",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 18000,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "1151 ratings",
                                      ratingCountV2: "1.2K+",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339526",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "77425280",
                                  name: "Prawn Mixed Biryani",
                                  category: "Rice And Biryani",
                                  imageId: "8e91a073de8111194f5ae585a1685b44",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808495",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 340,
                                            default: 1,
                                            id: "38737456",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 410,
                                            id: "38737455",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808495",
                                            variationId: "38737456",
                                          },
                                        ],
                                        price: 34000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731966",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731966",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808495",
                                            variationId: "38737455",
                                          },
                                        ],
                                        price: 41000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731966",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731966",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731966",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 34000,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "84 ratings",
                                      ratingCountV2: "84",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339702",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371438",
                                  name: "Mixed Biryani",
                                  category: "Rice And Biryani",
                                  description:
                                    "| Medium spicy | Served with Raita |",
                                  imageId: "4b4a8202370cfd11907c3bbb6bb6aa3b",
                                  inStock: 1,
                                  price: 41000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731948",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.0",
                                      ratingCount: "474 ratings",
                                      ratingCountV2: "474",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339619",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834428",
                                  name: "Prawn Biryani",
                                  category: "Rice And Biryani",
                                  description:
                                    "| Medium spicy | Served with Raita |",
                                  imageId: "7e4c64ea85f29a1357cc2639661489b6",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808494",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 300,
                                            default: 1,
                                            id: "38737454",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 350,
                                            id: "38737453",
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808494",
                                            variationId: "38737454",
                                          },
                                        ],
                                        price: 30000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731962",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731962",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808494",
                                            variationId: "38737453",
                                          },
                                        ],
                                        price: 35000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731962",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731962",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731962",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 30000,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.9",
                                      ratingCount: "295 ratings",
                                      ratingCountV2: "295",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339696",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "77425276",
                                  name: "Chicken Curry Biryani With Bone",
                                  category: "Rice And Biryani",
                                  imageId: "692dcaf3a1b02a269f549c85909f4fd0",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808487",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 225,
                                            default: 1,
                                            id: "38737440",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 310,
                                            id: "38737439",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808487",
                                            variationId: "38737440",
                                          },
                                        ],
                                        price: 22500,
                                        addonCombinations: [
                                          {
                                            groupId: "39731952",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731952",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808487",
                                            variationId: "38737439",
                                          },
                                        ],
                                        price: 31000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731952",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731952",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731952",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 22500,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "424 ratings",
                                      ratingCountV2: "424",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339451",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371440",
                                  name: "Foodpark Spl Biryani",
                                  category: "Rice And Biryani",
                                  imageId: "4677c40771704da43aa4508d0c126bb2",
                                  inStock: 1,
                                  price: 42000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731967",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.0",
                                      ratingCount: "200 ratings",
                                      ratingCountV2: "200",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339557",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "77425279",
                                  name: "Mutton Mixed Biryani",
                                  category: "Rice And Biryani",
                                  imageId: "1d2a76690a5cbdf01ac766865f718142",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808493",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 310,
                                            default: 1,
                                            id: "38737452",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 390,
                                            id: "38737451",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808493",
                                            variationId: "38737452",
                                          },
                                        ],
                                        price: 31000,
                                        addonCombinations: [
                                          {
                                            groupId: "55666072",
                                            addonId: "45392058",
                                          },
                                          {
                                            groupId: "55666071",
                                            addonId: "45392057",
                                          },
                                          {
                                            groupId: "55666070",
                                            addonId: "45392056",
                                          },
                                          {
                                            groupId: "55666068",
                                            addonId: "45392059",
                                          },
                                          {
                                            groupId: "39731959",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731959",
                                            addonId: "27241777",
                                          },
                                          {
                                            groupId: "55666069",
                                            addonId: "45392060",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808493",
                                            variationId: "38737451",
                                          },
                                        ],
                                        price: 39000,
                                        addonCombinations: [
                                          {
                                            groupId: "55666072",
                                            addonId: "45392058",
                                          },
                                          {
                                            groupId: "55666071",
                                            addonId: "45392057",
                                          },
                                          {
                                            groupId: "55666070",
                                            addonId: "45392056",
                                          },
                                          {
                                            groupId: "55666068",
                                            addonId: "45392059",
                                          },
                                          {
                                            groupId: "39731959",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731959",
                                            addonId: "27241777",
                                          },
                                          {
                                            groupId: "55666069",
                                            addonId: "45392060",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731959",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666068",
                                      groupName:
                                        "Chicken Joint Fry [2 Piceces] @15% Off!",
                                      choices: [
                                        {
                                          id: "45392059",
                                          name: "Chicken Joint Fry [2 Piceces]",
                                          price: 17900,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666069",
                                      groupName:
                                        "Chicken Joint Rost [2 Piceces] @15% Off!",
                                      choices: [
                                        {
                                          id: "45392060",
                                          name: "Chicken Joint Rost [2 Piceces]",
                                          price: 18700,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666070",
                                      groupName:
                                        "Chicken Manchuriya Dry @15% Off!",
                                      choices: [
                                        {
                                          id: "45392056",
                                          name: "Chicken Manchuriya Dry",
                                          price: 22000,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666071",
                                      groupName:
                                        "Chicken Fry With Bone @15% Off!",
                                      choices: [
                                        {
                                          id: "45392057",
                                          name: "Chicken Fry With Bone",
                                          price: 22100,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666072",
                                      groupName:
                                        "Chicken Fry With Boneless @15% Off!",
                                      choices: [
                                        {
                                          id: "45392058",
                                          name: "Chicken Fry With Boneless",
                                          price: 22100,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 31000,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.9",
                                      ratingCount: "245 ratings",
                                      ratingCountV2: "245",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339643",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28709782",
                                  name: "Mutton Biryani",
                                  category: "Rice And Biryani",
                                  description:
                                    "| Medium spicy | With-bone | Served with Raita |",
                                  imageId: "cd663c99c16f21cfcc5d9453526068b4",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808492",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 300,
                                            default: 1,
                                            id: "38737450",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 400,
                                            id: "38737449",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808492",
                                            variationId: "38737450",
                                          },
                                        ],
                                        price: 30000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731958",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731958",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808492",
                                            variationId: "38737449",
                                          },
                                        ],
                                        price: 40000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731958",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731958",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731958",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 30000,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "480 ratings",
                                      ratingCountV2: "480",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339633",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "31834424",
                                  name: "Joint Roast Biryani",
                                  category: "Rice And Biryani",
                                  description:
                                    "| Medium spicy | With-bone | Served with Raita |",
                                  imageId: "c09c1ac74e29470f3ff04016d2ccdfab",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808491",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 215,
                                            default: 1,
                                            id: "38737448",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 300,
                                            id: "38737447",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808491",
                                            variationId: "38737448",
                                          },
                                        ],
                                        price: 21500,
                                        addonCombinations: [
                                          {
                                            groupId: "39731957",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731957",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808491",
                                            variationId: "38737447",
                                          },
                                        ],
                                        price: 30000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731957",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731957",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731957",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 21500,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.0",
                                      ratingCount: "265 ratings",
                                      ratingCountV2: "265",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  isBolt: true,
                                  boltImageId:
                                    "bolt/bolt-tag/bolt_menu_tag.png",
                                  parentId: "4339578",
                                  menuFilterIds: [
                                    "BOLT",
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "130926534",
                                  name: "Chikken Mogalai Biryani",
                                  category: "Rice And Biryani",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 29000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "127 ratings",
                                      ratingCountV2: "127",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "76089750",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "130926544",
                                  name: "Veg Special Biryani With Panner",
                                  category: "Rice And Biryani",
                                  isVeg: 1,
                                  price: 29000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 10 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "95 ratings",
                                      ratingCountV2: "95",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "76089765",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "130926546",
                                  name: "Veg Special Biryani With Veg Manchuriya",
                                  category: "Rice And Biryani",
                                  isVeg: 1,
                                  price: 29000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 10 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "56 ratings",
                                      ratingCountV2: "56",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "76089767",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "130926543",
                                  name: "Veg Special Biryani With Mushroom",
                                  category: "Rice And Biryani",
                                  isVeg: 1,
                                  price: 29000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 10 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "33 ratings",
                                      ratingCountV2: "33",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "76089764",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "77425275",
                                  name: "Vegetable Biryani",
                                  category: "Rice And Biryani",
                                  description:
                                    "| Serves 1-2 | Medium spicy | Served with Raita |",
                                  imageId: "d5bc7916e7e9da273ac4212633d1881c",
                                  isVeg: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808484",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 150,
                                            default: 1,
                                            id: "38737434",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 200,
                                            id: "38737433",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808484",
                                            variationId: "38737434",
                                          },
                                        ],
                                        price: 15000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731947",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731947",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808484",
                                            variationId: "38737433",
                                          },
                                        ],
                                        price: 20000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731947",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731947",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731947",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 10 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  defaultPrice: 15000,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "986 ratings",
                                      ratingCountV2: "986",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "38469118",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "130926542",
                                  name: "Veg Mixed Veg Manchuriya Biryani",
                                  category: "Rice And Biryani",
                                  isVeg: 1,
                                  price: 29000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 10 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "26 ratings",
                                      ratingCountV2: "26",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "76089761",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "130926545",
                                  name: "Veg Special Biryani With Tomoto Cashew",
                                  category: "Rice And Biryani",
                                  isVeg: 1,
                                  price: 30000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 10 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "28 ratings",
                                      ratingCountV2: "28",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "76089766",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "130926541",
                                  name: "Veg Mixed Special Biryani",
                                  category: "Rice And Biryani",
                                  isVeg: 1,
                                  price: 33000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 10 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "76089760",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "130926540",
                                  name: "Veg Mixed Biryani",
                                  category: "Rice And Biryani",
                                  isVeg: 1,
                                  price: 33000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 10 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "76089759",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "17459060",
                        },
                      ],
                      image: "0bdac7be07e6a8aa74dd5e3be82a5d23",
                      categoryId: "17459050",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Fried Rice And Noodles",
                      categories: [
                        {
                          title: "Non Veg Fried Rice",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371382",
                                  name: "Spl Chicken Fried Rice",
                                  category: "Fried Rice And Noodles",
                                  description:
                                    "| Serves 1-2 | Served with Curry/Gravy |",
                                  imageId: "304239257274f223ca0214fc8826e26c",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808502",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 215,
                                            default: 1,
                                            id: "38737471",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 290,
                                            id: "38737470",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808502",
                                            variationId: "38737471",
                                          },
                                        ],
                                        price: 21500,
                                        addonCombinations: [
                                          {
                                            groupId: "39731989",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731989",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808502",
                                            variationId: "38737470",
                                          },
                                        ],
                                        price: 29000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731989",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731989",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731989",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 21500,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "5825 ratings",
                                      ratingCountV2: "5.8K+",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339741",
                                  menuFilterIds: [
                                    "bestseller",
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28709801",
                                  name: "Chicken Fried Rice",
                                  category: "Fried Rice And Noodles",
                                  description: "| Served with Raita |",
                                  imageId: "0085e83c1a10fe74800eddbacf708898",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808499",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 200,
                                            default: 1,
                                            id: "38737465",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 280,
                                            id: "38737464",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808499",
                                            variationId: "38737465",
                                          },
                                        ],
                                        price: 20000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731985",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731985",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808499",
                                            variationId: "38737464",
                                          },
                                        ],
                                        price: 28000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731985",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731985",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731985",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 20000,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "2335 ratings",
                                      ratingCountV2: "2.3K+",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339460",
                                  menuFilterIds: [
                                    "bestseller",
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "77425284",
                                  name: "Egg Fried Rice",
                                  category: "Fried Rice And Noodles",
                                  description:
                                    "| Serves 1-2 | Served with Raita |",
                                  imageId: "e3e2c3c0c3d476c9d4af4daef2ae0bb1",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808498",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 140,
                                            default: 1,
                                            id: "38737463",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 190,
                                            id: "38737462",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808498",
                                            variationId: "38737463",
                                          },
                                        ],
                                        price: 14000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731982",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731982",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808498",
                                            variationId: "38737462",
                                          },
                                        ],
                                        price: 19000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731982",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731982",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731982",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 14000,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "1599 ratings",
                                      ratingCountV2: "1.6K+",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339531",
                                  menuFilterIds: [
                                    "bestseller",
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371386",
                                  name: "Spl Prawn Fried Rice",
                                  category: "Fried Rice And Noodles",
                                  description: "| Served with Curry/Gravy |",
                                  imageId: "20be81722532a9e18724861080aa8e56",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808504",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 255,
                                            default: 1,
                                            id: "38737475",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 330,
                                            id: "38737474",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808504",
                                            variationId: "38737475",
                                          },
                                        ],
                                        price: 25500,
                                        addonCombinations: [
                                          {
                                            groupId: "39731992",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731992",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808504",
                                            variationId: "38737474",
                                          },
                                        ],
                                        price: 33000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731992",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731992",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731992",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 25500,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.9",
                                      ratingCount: "161 ratings",
                                      ratingCountV2: "161",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339744",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371384",
                                  name: "Spl Mutton Fried Rice",
                                  category: "Fried Rice And Noodles",
                                  imageId: "ad8d7f583df957d6e60a51dd10f61082",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808503",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 275,
                                            default: 1,
                                            id: "38737473",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 360,
                                            id: "38737472",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808503",
                                            variationId: "38737473",
                                          },
                                        ],
                                        price: 27500,
                                        addonCombinations: [
                                          {
                                            groupId: "39731991",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731991",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808503",
                                            variationId: "38737472",
                                          },
                                        ],
                                        price: 36000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731991",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731991",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731991",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 27500,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.7",
                                      ratingCount: "42 ratings",
                                      ratingCountV2: "42",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339743",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "77425288",
                                  name: "Prawn Fried Rice",
                                  category: "Fried Rice And Noodles",
                                  description:
                                    "A satisfying non-veg fried rice featuring succulent prawns.",
                                  imageId: "e0848a185d5bc196ee6339dab6d6b513",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808501",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 240,
                                            default: 1,
                                            id: "38737469",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 290,
                                            id: "38737468",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808501",
                                            variationId: "38737469",
                                          },
                                        ],
                                        price: 24000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731988",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731988",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808501",
                                            variationId: "38737468",
                                          },
                                        ],
                                        price: 29000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731988",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731988",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731988",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 24000,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "71 ratings",
                                      ratingCountV2: "71",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "38469116",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28709815",
                                  name: "Mixed Fried Rice",
                                  category: "Fried Rice And Noodles",
                                  description:
                                    "Indulge in a medley of flavors with our savory mixed fried rice.",
                                  inStock: 1,
                                  price: 40000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731993",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "31 ratings",
                                      ratingCountV2: "31",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339620",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "77425283",
                                  name: "Spl Mixed Fried Rice",
                                  category: "Fried Rice And Noodles",
                                  inStock: 1,
                                  price: 37000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731981",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "19 ratings",
                                      ratingCountV2: "19",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "38469117",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "77425285",
                                  name: "Egg Fried Riec Spl[n]",
                                  category: "Fried Rice And Noodles",
                                  imageId: "c61a67606f4105a3bcef4ae0d6e6341a",
                                  inStock: 1,
                                  price: 29000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731984",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "13 ratings",
                                      ratingCountV2: "13",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "38469113",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "77425286",
                                  name: "Mutton Fried Rice",
                                  category: "Fried Rice And Noodles",
                                  description:
                                    "Juicy mutton pieces lightly fried and served with aromatic rice, bursting with rich and savory flavors.",
                                  imageId: "a4c2188db88ca794e578c1153747f10c",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808500",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 300,
                                            default: 1,
                                            id: "38737467",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 380,
                                            id: "38737466",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808500",
                                            variationId: "38737467",
                                          },
                                        ],
                                        price: 30000,
                                        addonCombinations: [
                                          {
                                            groupId: "55666065",
                                            addonId: "45392059",
                                          },
                                          {
                                            groupId: "39731987",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731987",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808500",
                                            variationId: "38737466",
                                          },
                                        ],
                                        price: 38000,
                                        addonCombinations: [
                                          {
                                            groupId: "55666065",
                                            addonId: "45392059",
                                          },
                                          {
                                            groupId: "39731987",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731987",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731987",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666065",
                                      groupName:
                                        "Chicken Joint Fry [2 Piceces] @15% Off!",
                                      choices: [
                                        {
                                          id: "45392059",
                                          name: "Chicken Joint Fry [2 Piceces]",
                                          price: 17900,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 30000,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "7 ratings",
                                      ratingCountV2: "7",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  isBolt: true,
                                  boltImageId:
                                    "bolt/bolt-tag/bolt_menu_tag.png",
                                  parentId: "4339637",
                                  menuFilterIds: [
                                    "BOLT",
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "17459062",
                        },
                        {
                          title: "Noodles",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28709869",
                                  name: "Chicken Noodles",
                                  category: "Fried Rice And Noodles",
                                  description:
                                    "Tender, juicy chicken nestled amongst a bed of savory, carb-rich noodles.",
                                  imageId: "53e7faed08047daef071038dc4fc6832",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808507",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Full",
                                            price: 230,
                                            id: "38737480",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Half",
                                            price: 165,
                                            default: 1,
                                            id: "38737481",
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808507",
                                            variationId: "38737481",
                                          },
                                        ],
                                        price: 16500,
                                        addonCombinations: [
                                          {
                                            groupId: "39732000",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39732000",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808507",
                                            variationId: "38737480",
                                          },
                                        ],
                                        price: 23000,
                                        addonCombinations: [
                                          {
                                            groupId: "39732000",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39732000",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39732000",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 16500,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.9",
                                      ratingCount: "2654 ratings",
                                      ratingCountV2: "2.7K+",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339486",
                                  menuFilterIds: [
                                    "bestseller",
                                    "NONVEG",
                                    "offer",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28709864",
                                  name: "Veg Noodles",
                                  category: "Fried Rice And Noodles",
                                  description:
                                    "A delicious blend of fresh vegetables and tender noodles, perfect for any noodle lover.",
                                  imageId: "b53680c84122290f0d256bcc33b6a02f",
                                  inStock: 1,
                                  isVeg: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808505",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 125,
                                            default: 1,
                                            id: "38737477",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 180,
                                            id: "38737476",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808505",
                                            variationId: "38737477",
                                          },
                                        ],
                                        price: 12500,
                                        addonCombinations: [
                                          {
                                            groupId: "39731996",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731996",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808505",
                                            variationId: "38737476",
                                          },
                                        ],
                                        price: 18000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731996",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731996",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731996",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  defaultPrice: 12500,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "925 ratings",
                                      ratingCountV2: "925",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339794",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28709867",
                                  name: "Egg Noodles",
                                  category: "Fried Rice And Noodles",
                                  description:
                                    "Satisfy your cravings with these heavenly egg noodles.",
                                  imageId: "47dbfa4f13569021a1962d550f68b564",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808506",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 145,
                                            default: 1,
                                            id: "38737479",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 190,
                                            id: "38737478",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808506",
                                            variationId: "38737479",
                                          },
                                        ],
                                        price: 14500,
                                        addonCombinations: [
                                          {
                                            groupId: "39731998",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731998",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808506",
                                            variationId: "38737478",
                                          },
                                        ],
                                        price: 19000,
                                        addonCombinations: [
                                          {
                                            groupId: "39731998",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731998",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731998",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 14500,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "471 ratings",
                                      ratingCountV2: "471",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339537",
                                  menuFilterIds: [
                                    "NONVEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "130926549",
                                  name: "Veg Manchuriya Noodles",
                                  category: "Fried Rice And Noodles",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 22000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "100 ratings",
                                      ratingCountV2: "100",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "76089758",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "130926550",
                                  name: "Veg Mushroom Noodles",
                                  category: "Fried Rice And Noodles",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 22000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "36 ratings",
                                      ratingCountV2: "36",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "76089762",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "130926551",
                                  name: "Veg Panner Noodles",
                                  category: "Fried Rice And Noodles",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 22000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "44 ratings",
                                      ratingCountV2: "44",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "76089763",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "130926547",
                                  name: "Mixed Veg Noodles",
                                  category: "Fried Rice And Noodles",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 24000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.0",
                                      ratingCount: "29 ratings",
                                      ratingCountV2: "29",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "76089754",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "130926548",
                                  name: "Veg Baby Corn Noodles",
                                  category: "Fried Rice And Noodles",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 22000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.4",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "76089757",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "17459063",
                        },
                        {
                          title: "Veg Fried Rice",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371373",
                                  name: "Spl Veg Fried Rice With Paneer Curry",
                                  category: "Fried Rice And Noodles",
                                  description:
                                    "| Serves 1-2 | Medium spicy | Served with Raita |",
                                  imageId: "d49c9177cf5a7798ad74888124331a05",
                                  isVeg: 1,
                                  price: 27000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731973",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 10 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "2434 ratings",
                                      ratingCountV2: "2.4K+",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339747",
                                  menuFilterIds: [
                                    "bestseller",
                                    "VEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371441",
                                  name: "Spl Veg Friedrice With Mushroom Curry",
                                  category: "Fried Rice And Noodles",
                                  description:
                                    "| Medium spicy | Served with Raita |",
                                  imageId: "c6f6e4b7fc55394a8b3f58f58bef2d41",
                                  isVeg: 1,
                                  price: 27000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731970",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 10 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "671 ratings",
                                      ratingCountV2: "671",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339746",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371374",
                                  name: "Spl Veg Fried Rice With Tomato Cashew Curry",
                                  category: "Fried Rice And Noodles",
                                  description:
                                    "| Medium spicy | Served with Raita |",
                                  imageId: "658362a54dd861c2879a1b279079a9df",
                                  isVeg: 1,
                                  price: 28000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731975",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 10 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "548 ratings",
                                      ratingCountV2: "548",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339748",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371372",
                                  name: "Spl Veg Fried Rice With Babycorn",
                                  category: "Fried Rice And Noodles",
                                  imageId: "c6f6e4b7fc55394a8b3f58f58bef2d41",
                                  isVeg: 1,
                                  price: 27000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731971",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 10 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "131 ratings",
                                      ratingCountV2: "131",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339745",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28709821",
                                  name: "Vegetable Fried Rice",
                                  category: "Fried Rice And Noodles",
                                  description:
                                    "A flavorful stir-fried rice dish loaded with fresh vegetables.",
                                  imageId: "b6a014e26c9b9728cf6b23aa6e699c69",
                                  isVeg: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11808497",
                                        name: "Variation",
                                        variations: [
                                          {
                                            name: "Half",
                                            price: 149,
                                            default: 1,
                                            id: "38737461",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 209,
                                            id: "38737460",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11808497",
                                            variationId: "38737461",
                                          },
                                        ],
                                        price: 14900,
                                        addonCombinations: [
                                          {
                                            groupId: "39731969",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731969",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11808497",
                                            variationId: "38737460",
                                          },
                                        ],
                                        price: 20900,
                                        addonCombinations: [
                                          {
                                            groupId: "39731969",
                                            addonId: "27241776",
                                          },
                                          {
                                            groupId: "39731969",
                                            addonId: "27241777",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "39731969",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 10 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  defaultPrice: 14900,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "750 ratings",
                                      ratingCountV2: "750",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  isBolt: true,
                                  boltImageId:
                                    "bolt/bolt-tag/bolt_menu_tag.png",
                                  parentId: "4339772",
                                  menuFilterIds: [
                                    "BOLT",
                                    "VEG",
                                    "offer",
                                    "toprated",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "28709834",
                                  name: "Mixed Veg Fried Rice",
                                  category: "Fried Rice And Noodles",
                                  description:
                                    "A scrumptious and satisfying mixture of vegetables and fried rice.",
                                  imageId: "18c84074e9fdcb7b06635c55e3ae3eb7",
                                  isVeg: 1,
                                  price: 31000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731979",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666183",
                                      groupName:
                                        "Chicken Joint Fry [2 Piceces] @15% Off!",
                                      choices: [
                                        {
                                          id: "45392059",
                                          name: "Chicken Joint Fry [2 Piceces]",
                                          price: 17900,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666184",
                                      groupName:
                                        "Chicken Joint Rost [2 Piceces] @15% Off!",
                                      choices: [
                                        {
                                          id: "45392060",
                                          name: "Chicken Joint Rost [2 Piceces]",
                                          price: 18700,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666185",
                                      groupName:
                                        "Chicken Manchuriya Dry @15% Off!",
                                      choices: [
                                        {
                                          id: "45392056",
                                          name: "Chicken Manchuriya Dry",
                                          price: 22000,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666186",
                                      groupName:
                                        "Chicken Fry With Bone @15% Off!",
                                      choices: [
                                        {
                                          id: "45392057",
                                          name: "Chicken Fry With Bone",
                                          price: 22100,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "55666187",
                                      groupName:
                                        "Chicken Fry With Boneless @15% Off!",
                                      choices: [
                                        {
                                          id: "45392058",
                                          name: "Chicken Fry With Boneless",
                                          price: 22100,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 10 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.6",
                                      ratingCount: "19 ratings",
                                      ratingCountV2: "19",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339624",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371442",
                                  name: "Spl Mixed Veg Fried Rice",
                                  category: "Fried Rice And Noodles",
                                  imageId: "aabbb41139f95b4c5a528aabe2e936ca",
                                  isVeg: 1,
                                  price: 33000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731980",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 10 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.1",
                                      ratingCount: "7 ratings",
                                      ratingCountV2: "7",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339742",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "56371375",
                                  name: "Spl. Wish Veg Manchuriya",
                                  category: "Fried Rice And Noodles",
                                  isVeg: 1,
                                  price: 27000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "39731974",
                                      groupName: "Add on plate",
                                      choices: [
                                        {
                                          id: "27241776",
                                          name: "2 Plates",
                                          price: 1000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "27241777",
                                          name: "1 Plate",
                                          price: 500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 10 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.9",
                                      ratingCount: "33 ratings",
                                      ratingCountV2: "33",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "4339749",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "17459061",
                        },
                      ],
                      image: "d49c9177cf5a7798ad74888124331a05",
                      categoryId: "17459051",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Combos",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "77425199",
                              name: "Chicken 65 + Chicken Fry Bit Biryani (full)",
                              category: "Combos",
                              inStock: 1,
                              price: 55000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.7",
                                  ratingCount: "29 ratings",
                                  ratingCountV2: "29",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              isBolt: true,
                              boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                              parentId: "38469109",
                              menuFilterIds: ["BOLT", "NONVEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "77425198",
                              name: "Chilli Chicken Dry + Hyderabadi Dum Biryani",
                              category: "Combos",
                              inStock: 1,
                              price: 54000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "17 ratings",
                                  ratingCountV2: "17",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "38469112",
                              menuFilterIds: ["NONVEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "77425197",
                              name: "Chicken Join Roast + Egg Biryani",
                              category: "Combos",
                              inStock: 1,
                              price: 43000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "38469111",
                              menuFilterIds: ["NONVEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "77425196",
                              name: "Veg. Manchurian + Mix Veg. Fried Rice",
                              category: "Combos",
                              inStock: 1,
                              isVeg: 1,
                              price: 44000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "38469119",
                              menuFilterIds: ["VEG", "offer", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "77425195",
                              name: "Paneer 65 + Vegetable Biryani",
                              category: "Combos",
                              isVeg: 1,
                              price: 36000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 10 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.4",
                                  ratingCount: "30 ratings",
                                  ratingCountV2: "30",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              isBolt: true,
                              boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                              parentId: "38469115",
                              menuFilterIds: ["BOLT", "VEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "17459047",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Meals",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "56371378",
                              name: "Meal With Chicken Curry",
                              category: "Meals",
                              description:
                                "| Medium spicy | With-bone | Served with Curd |",
                              price: 19000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 10 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "954 ratings",
                                  ratingCountV2: "954",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              isBolt: true,
                              boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                              parentId: "4339607",
                              menuFilterIds: [
                                "BOLT",
                                "NONVEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "56371379",
                              name: "Meal With Chicken Joint Curry",
                              category: "Meals",
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 10 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "354 ratings",
                                  ratingCountV2: "354",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "4339609",
                              menuFilterIds: ["NONVEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "31834476",
                              name: "Full Meals",
                              category: "Meals",
                              description:
                                "An enticing and satisfying rice-based meal with a complete variety of flavors and nutrients.",
                              imageId: "6cf15353cd82264f6bc1af5f63f04942",
                              isVeg: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 10 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "1660 ratings",
                                  ratingCountV2: "1.7K+",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              isBolt: true,
                              boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                              parentId: "36986127",
                              menuFilterIds: [
                                "BOLT",
                                "VEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "56371376",
                              name: "Meal With Egg Curry",
                              category: "Meals",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/7/24/c54cf792-bca5-4534-be1e-1765690714ca_78246324-acbf-405e-846e-a5a0e90b9ebc.jpg",
                              price: 17000,
                              finalPrice: 8500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 10 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "208 ratings",
                                  ratingCountV2: "208",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              isBolt: true,
                              boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                              offerIds: [
                                "41db7066-c2e7-4bf3-8b1c-f18ece42c2b2",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "4339611",
                              menuFilterIds: [
                                "BOLT",
                                "NONVEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "31834477",
                              name: "Curd Rice",
                              category: "Meals",
                              description:
                                "A comforting and creamy Indian vegetarian classic, perfect for a satisfying meal.",
                              imageId: "49a12c146b2e3381714797f9d61067cc",
                              isVeg: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 10 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "200 ratings",
                                  ratingCountV2: "200",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "4339512",
                              menuFilterIds: ["VEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "31834475",
                              name: "Plate Meals",
                              category: "Meals",
                              description:
                                "A satisfying veg meal perfect for when you're feeling peckish.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/7/24/6d56a8f4-e87e-4c7b-a585-0407683ab7b7_99a98de7-dfa2-44e2-85e8-39577d3ea59c.jpg",
                              isVeg: 1,
                              price: 14900,
                              finalPrice: 7400,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 10 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "317 ratings",
                                  ratingCountV2: "317",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              isBolt: true,
                              boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                              offerIds: [
                                "957a9b58-19cd-44d1-87fb-5758c45fdad4",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "36986128",
                              menuFilterIds: [
                                "BOLT",
                                "VEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image: "6cf15353cd82264f6bc1af5f63f04942",
                      categoryId: "17459048",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "New Year Special",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "130926538",
                              name: "Natukodi Fri Bit Biryani",
                              category: "New Year Special",
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "35969035",
                                    name: "Variation",
                                    variations: [
                                      {
                                        name: "Half",
                                        price: 210,
                                        default: 1,
                                        id: "111710817",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 330,
                                        id: "111710816",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "35969035",
                                        variationId: "111710817",
                                      },
                                    ],
                                    price: 21000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "35969035",
                                        variationId: "111710816",
                                      },
                                    ],
                                    price: 33000,
                                  },
                                ],
                              },
                              nextAvailableAtMessage:
                                "Next available at 10 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              defaultPrice: 21000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              isBolt: true,
                              boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                              parentId: "76089755",
                              menuFilterIds: ["BOLT", "NONVEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "130926537",
                              name: "Kouju Bird Biryani (2 Birds)",
                              category: "New Year Special",
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "35969034",
                                    name: "Variation",
                                    variations: [
                                      {
                                        name: "Half",
                                        price: 230,
                                        default: 1,
                                        id: "111710815",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 330,
                                        id: "111710814",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "35969034",
                                        variationId: "111710815",
                                      },
                                    ],
                                    price: 23000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "35969034",
                                        variationId: "111710814",
                                      },
                                    ],
                                    price: 33000,
                                  },
                                ],
                              },
                              nextAvailableAtMessage:
                                "Next available at 10 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              defaultPrice: 23000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "76089753",
                              menuFilterIds: ["NONVEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "130926536",
                              name: "Dupudu Gorre Biryani",
                              category: "New Year Special",
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "35969033",
                                    name: "Variation",
                                    variations: [
                                      {
                                        name: "Half",
                                        price: 260,
                                        default: 1,
                                        id: "111710812",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Half",
                                        price: 260,
                                        id: "111710813",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 360,
                                        id: "111710810",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 360,
                                        id: "111710811",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "35969033",
                                        variationId: "111710812",
                                      },
                                    ],
                                    price: 26000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "35969033",
                                        variationId: "111710813",
                                      },
                                    ],
                                    price: 26000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "35969033",
                                        variationId: "111710810",
                                      },
                                    ],
                                    price: 36000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "35969033",
                                        variationId: "111710811",
                                      },
                                    ],
                                    price: 36000,
                                  },
                                ],
                              },
                              nextAvailableAtMessage:
                                "Next available at 10 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              defaultPrice: 26000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              parentId: "76089752",
                              menuFilterIds: ["VEG", "offer", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "130926539",
                              name: "Tarkey Fri Bit Biryani",
                              category: "New Year Special",
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "35969036",
                                    name: "Variation",
                                    variations: [
                                      {
                                        name: "Half",
                                        price: 260,
                                        default: 1,
                                        id: "111710819",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 360,
                                        id: "111710818",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "35969036",
                                        variationId: "111710819",
                                      },
                                    ],
                                    price: 26000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "35969036",
                                        variationId: "111710818",
                                      },
                                    ],
                                    price: 36000,
                                  },
                                ],
                              },
                              nextAvailableAtMessage:
                                "Next available at 10 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              defaultPrice: 26000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "76089756",
                              menuFilterIds: ["VEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "43894935",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      type: "FSSAI",
                      imageId: "fssai_final_edss9i",
                      text: ["License No. 20119039000015"],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: "Food Park Family Restaurant",
                      area: "Kakinada",
                      completeAddress:
                        "8-5-22 ontimamidi junction ,gandhi park back side,gandhinagar",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
  tid: "9926cec3-3f22-4f8a-8813-8451075666c4",
  sid: "pzx7e2fb21a-3272-4c07-bc31-5ed08931f",
  deviceId: "ded857e0-08bf-e46d-4fdd-470a678205c4",
  csrfToken: "JxrrZqsRCfRX-amnCdTQw1MUxlzBtw6o6mb59kEQ",
};
