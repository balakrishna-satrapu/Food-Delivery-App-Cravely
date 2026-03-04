export const siri = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "Siri Fast Foods",
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
              id: "655296",
              name: "Siri Fast Foods",
              city: "Kakinada",
              slugs: {
                restaurant: "siri-fast-foods-bhanugudi-bhanugudi-2",
                city: "kakinada",
              },
              uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              cloudinaryImageId: "20cf22244d6772bb2d0a9427f8b8e611",
              locality: "Kakinada",
              areaName: "Bhanugudi",
              costForTwo: "20000",
              costForTwoMessage: "₹200 for two",
              cuisines: ["Fast Food", "Snacks"],
              avgRating: 4.3,
              feeDetails: {
                restaurantId: "655296",
                fees: [{}],
              },
              parentId: "188805",
              avgRatingString: "4.3",
              totalRatingsString: "5.0K+ ratings",
              sla: {
                restaurantId: "655296",
                deliveryTime: 16,
                minDeliveryTime: 15,
                maxDeliveryTime: 20,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                stressFactor: 1,
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                zoneId: 905,
                slaString: "15-20 MINS",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2026-03-03 22:00:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                header: "Get items under 99",
                shortDescriptionList: [
                  {
                    meta: "99 store",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Flat ₹200 off | Use FLAT200",
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
                    meta: "Flat ₹200 off | Use FLAT200",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString: "siri-fast-foods-bhanugudi-bhanugudi-2",
              isOpen: true,
              labels: [
                {
                  title: "Timings",
                  message: "null",
                },
                {
                  title: "Address",
                  message:
                    "X69R+4V2, G O Colony, Kakinada, Andhra Pradesh 533003",
                },
                {
                  title: "Cuisines",
                  message: "Fast Food,Snacks",
                },
              ],
              totalRatings: 5000,
              aggregatedDiscountInfoV2: {
                header: "Get items under 99",
                shortDescriptionList: [
                  {
                    meta: "99 store",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Flat ₹200 off | Use FLAT200",
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
                    meta: "Flat ₹200 off | Use FLAT200",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                ],
                couponDetailsCta: "View coupon details",
              },
              type: "F",
              nudgeBanners: [
                {
                  priority: 5,
                  discountInfo: {
                    discountType: "FinalPrice",
                    value: 149,
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
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/655296",
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
              latLong: "16.96798527,82.24212871",
              backgroundImageOverlayInfo: {},
              featuredSectionInfo: {},
              requestContexts: ["enable_ecosaver", "99store"],
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
                      restId: "655296",
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
                      header: "ITEMS AT ₹99",
                      offerTag: "DEAL OF DAY",
                      offerTagColor: "#E46D47",
                      offerIds: ["4046af76-9211-4a95-8a36-aa66bf251599"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      description: "ON SELECT ITEMS |",
                      offerType: "offers",
                      restId: "655296",
                      offerLogo: "offers/deal-of-day",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "FLAT ₹200 OFF",
                      offerTag: "FLAT DEAL",
                      offerTagColor: "#E46D47",
                      offerIds: ["0233c404-d019-4b29-97ba-011824d94d96"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE FLAT200",
                      description: "ABOVE ₹399",
                      offerType: "offers",
                      restId: "655296",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE FLAT200",
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
                      restId: "655296",
                      offerLogo:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2026/2/28/fa07ebc1-f02e-4584-8057-29c92f4872b8_YESBankMenuLogoNew1.png",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "NO CODE REQUIRED",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "FLAT ₹150 OFF",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2026/3/1/297211d6-0a0c-4d11-a6f4-f8727ac2aff6_Axis.png",
                      offerIds: ["49c6aa12-f2fa-4298-9d4e-71d9f736e34a"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE AXISREWARDS",
                      description: "ABOVE ₹500",
                      offerType: "offers",
                      restId: "655296",
                      offerLogo:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2026/3/1/297211d6-0a0c-4d11-a6f4-f8727ac2aff6_Axis.png",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE AXISREWARDS",
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
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107030691",
                              name: "Egg fried rice",
                              category: "Fried Rice",
                              description:
                                "A flavorful combination of rice, eggs, and assorted non-vegetarian ingredients stir-fried to perfection.",
                              imageId: "a1efe65fc9146cefe8226667fff3db35",
                              inStock: 1,
                              price: 19900,
                              finalPrice: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "304 ratings",
                                  ratingCountV2: "304",
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
                              offerIds: [
                                "4046af76-9211-4a95-8a36-aa66bf251599",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "13798474",
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
                              id: "107030686",
                              name: "Veg fried rice",
                              category: "Fried Rice",
                              description:
                                "A delightful blend of vegetables and perfectly cooked rice, fried to perfection.",
                              imageId: "c14aa4e13486bd619744c89dee0d4360",
                              inStock: 1,
                              isVeg: 1,
                              price: 12900,
                              finalPrice: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
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
                                  rating: "4.2",
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
                              cartContext: "quick_prep",
                              offerIds: [
                                "4046af76-9211-4a95-8a36-aa66bf251599",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "13798481",
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
                              id: "107030713",
                              name: "Paneer frd rc",
                              category: "Fried Rice",
                              description:
                                "A delectable combination of golden-fried paneer and fragrant rice, offering a harmonious blend of flavors that will leave you craving for more.",
                              imageId: "c8ed1411e931c69fea13e1af74e4a3b2",
                              inStock: 1,
                              isVeg: 1,
                              price: 16600,
                              finalPrice: 12900,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "48225337",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "(Serves 1)",
                                        default: 1,
                                        id: "152379306",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "(Serves 2)",
                                        price: 16000,
                                        id: "152379311",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
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
                              cartContext: "quick_prep",
                              offerIds: [
                                "3858fb7b-7fc0-4ddc-a2df-f4a018092d40",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "61320131",
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
                              id: "107030688",
                              name: "Paneer fried rice mix",
                              category: "Fried Rice",
                              description:
                                "Delight in a flavorful fusion of fragrant basmati rice and delectably spiced paneer, showcasing the perfect balance of textures and flavors in every bite.",
                              imageId: "c8ed1411e931c69fea13e1af74e4a3b2",
                              inStock: 1,
                              isVeg: 1,
                              price: 14900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "222 ratings",
                                  ratingCountV2: "222",
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
                              parentId: "61320132",
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
                              id: "107030690",
                              name: "Special veg all mixed fried rice",
                              category: "Fried Rice",
                              description:
                                "A flavorful assortment of mixed vegetables stir-fried with fragrant rice to create a delectable and satisfying vegetarian fried rice.",
                              imageId: "b5cdafa265b2ff0f3eb1fbca3a62de34",
                              inStock: 1,
                              isVeg: 1,
                              price: 17900,
                              finalPrice: 13900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "215 ratings",
                                  ratingCountV2: "215",
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
                              offerIds: [
                                "bfc27fd8-346b-40b4-89c8-b4f3ceca3d91",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "61320143",
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
                              id: "107030714",
                              name: "Mushroom frd rc",
                              category: "Fried Rice",
                              description:
                                "A tantalizing blend of mushrooms and flavorful seasonings expertly fried with fragrant rice, delivering a delightful and savory experience.",
                              imageId: "9aa7ec61cea6a32f5502daecf80c1890",
                              inStock: 1,
                              isVeg: 1,
                              price: 16600,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "61320125",
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
                              id: "107030663",
                              name: "Veg manchurian",
                              category: "Starters",
                              description:
                                "A tantalizing fusion of vegetables and flavorful spices that will whet your appetite and leave you craving for more.",
                              imageId: "f2a4365e1b8e2d0f45ceff7c65ec8917",
                              inStock: 1,
                              isVeg: 1,
                              price: 12900,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "31670695",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "97992247",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 2100,
                                        id: "97992248",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
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
                                  ratingCount: "158 ratings",
                                  ratingCountV2: "158",
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
                              parentId: "13798482",
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
                              id: "107030664",
                              name: "Chilli mushroom",
                              category: "Starters",
                              description:
                                "A tantalizing medley of flavors and textures, this vegetarian starter is sure to please with its robust and savory profile.",
                              imageId: "22513fb85800962b2389f77b30fbcb47",
                              inStock: 1,
                              isVeg: 1,
                              price: 17900,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "31670696",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "97992249",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 3100,
                                        id: "97992250",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
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
                              parentId: "61320112",
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
                              id: "107030665",
                              name: "Mushroom manchurian",
                              category: "Starters",
                              description:
                                "A delectable blend of mushrooms in a savory sauce, Mushroom Manchurian is a perfect vegetarian starter bursting with flavors.",
                              imageId: "22513fb85800962b2389f77b30fbcb47",
                              inStock: 1,
                              isVeg: 1,
                              price: 17900,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "31670697",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "97992251",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 6100,
                                        id: "97992252",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
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
                              parentId: "61320127",
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
                              id: "107030666",
                              name: "Chilli paneer",
                              category: "Starters",
                              description:
                                "A flavorful and perfectly seasoned appetizer bursting with delightful flavors and Indian-inspired spices.",
                              imageId: "92b7020733aaf22fb598eef3ebc45ce8",
                              inStock: 1,
                              isVeg: 1,
                              price: 17900,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "31670698",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "97992253",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 7100,
                                        id: "97992254",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "32 ratings",
                                  ratingCountV2: "32",
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
                              imageBadges: [
                                {
                                  imageId: "merch_bau/High%20Protein%201_1.png",
                                },
                              ],
                              parentId: "61320113",
                              menuFilterIds: ["EATRIGHT", "VEG", "offer"],
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
                              id: "107030668",
                              name: "Mushroom 65",
                              category: "Starters",
                              description:
                                "A delightful vegetarian starter featuring tender mushrooms, bursting with flavor and perfectly seasoned.",
                              imageId: "22513fb85800962b2389f77b30fbcb47",
                              inStock: 1,
                              isVeg: 1,
                              price: 17900,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "31670699",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "97992255",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 7100,
                                        id: "97992256",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
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
                              parentId: "61320124",
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
                              id: "107030669",
                              name: "Paneer manchurian",
                              category: "Starters",
                              description:
                                "A flavorful and tantalizing vegetarian starter full of Asian-inspired flavors.",
                              imageId: "59359a27ad278a25ddd99ebf76c21c38",
                              inStock: 1,
                              isVeg: 1,
                              price: 17900,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "31670700",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "97992257",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 8000,
                                        id: "97992258",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "22 ratings",
                                  ratingCountV2: "22",
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
                              parentId: "61320133",
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
                              id: "107030667",
                              name: "Paneer 65",
                              category: "Starters",
                              description:
                                "A delectable vegetarian starter that packs a perfect blend of flavors and textures.",
                              imageId: "82c24b97ef70479ccb77719ff5b02559",
                              inStock: 1,
                              isVeg: 1,
                              price: 17900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
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
                              parentId: "61320130",
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
                              id: "107030670",
                              name: "Chicken 65",
                              category: "Starters",
                              description:
                                "A tantalizing and flavorsome chicken dish bursting with a medley of aromatic spices.",
                              imageId: "499a9b93fdb61894d7bffa2c3cf8c333",
                              inStock: 1,
                              price: 18900,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "48225331",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "(Serves 1)",
                                        default: 1,
                                        id: "152379294",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "(Serves 2)",
                                        price: 18200,
                                        id: "152379295",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
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
                              imageBadges: [
                                {
                                  imageId: "merch_bau/High%20Protein%201_1.png",
                                },
                              ],
                              parentId: "13798463",
                              menuFilterIds: ["EATRIGHT", "NONVEG", "offer"],
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
                              id: "107030671",
                              name: "Chicken lollipop [6 pieces]",
                              category: "Starters",
                              description:
                                "Delicious and succulent chicken lollipops, a perfect appetizer for your non-vegetarian cravings.",
                              imageId: "828802e111b361742adb1f57849e67bd",
                              inStock: 1,
                              price: 18900,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "48225333",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "(6 Piece)",
                                        default: 1,
                                        id: "152379298",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "(12 Piece)",
                                        price: 18200,
                                        id: "152379299",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
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
                                  rating: "4.4",
                                  ratingCount: "298 ratings",
                                  ratingCountV2: "298",
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
                              parentId: "61320105",
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
                              id: "107030672",
                              name: "Lemon chicken",
                              category: "Starters",
                              description:
                                "Tender chicken infused with zesty lemon, bursting with flavors that will tantalize your taste buds and leave you craving for more.",
                              imageId: "db440f0c6985697a88f07716cd3c1997",
                              inStock: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
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
                              parentId: "61320121",
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
                              id: "107030673",
                              name: "Chicken manchurian",
                              category: "Starters",
                              description:
                                "A tantalizing blend of tender chicken in a delectable sauce, bursting with flavors that are sure to delight your taste buds.",
                              imageId: "64c0db2100f42648892489ce372a4c0a",
                              inStock: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "122 ratings",
                                  ratingCountV2: "122",
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
                              parentId: "13798468",
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
                              id: "107030674",
                              name: "Chill chicken",
                              category: "Starters",
                              description:
                                "Indulge in the irresistible flavors of perfectly seasoned, tender chicken, bursting with savory goodness.",
                              imageId: "3882f640e1ed7f4d2c841aa957f2f322",
                              inStock: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "106 ratings",
                                  ratingCountV2: "106",
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
                              parentId: "61320111",
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
                              id: "107030676",
                              name: "Kadai chicken",
                              category: "Starters",
                              imageId: "c391f06b93a53fc55aed21bd27a4fb12",
                              inStock: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
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
                              parentId: "61320120",
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
                              id: "107030679",
                              name: "Veg noodles",
                              category: "Noodles",
                              description:
                                "Delicious and flavorful, this dish combines tender noodles with a delightful mix of garden-fresh vegetables.",
                              imageId: "714b2351ad3fdb6e0711e96de8a93495",
                              inStock: 1,
                              isVeg: 1,
                              price: 19900,
                              finalPrice: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "143 ratings",
                                  ratingCountV2: "143",
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
                              offerIds: [
                                "4046af76-9211-4a95-8a36-aa66bf251599",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "13798483",
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
                      title: "Fried Rice",
                      categories: [
                        {
                          title: "Non Veg",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107030703",
                                  name: "Chicken lollopops fried rice",
                                  category: "Fried Rice",
                                  description:
                                    "Deliciously flavorful fried rice with succulent chicken lollipops.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2025/2/22/6535e0fc-8f0c-47df-9b23-64f3d0289843_eeb2e0d2-33e6-45ec-90ea-0ad7d98541d4.jpg",
                                  inStock: 1,
                                  price: 20500,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "48330175",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "(Serves 1)",
                                            default: 1,
                                            id: "152552777",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "(Serves 2)",
                                            price: 19700,
                                            id: "152552780",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
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
                                      rating: "4.3",
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
                                  parentId: "61320106",
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
                                  id: "107030691",
                                  name: "Egg fried rice",
                                  category: "Fried Rice",
                                  description:
                                    "A flavorful combination of rice, eggs, and assorted non-vegetarian ingredients stir-fried to perfection.",
                                  imageId: "a1efe65fc9146cefe8226667fff3db35",
                                  inStock: 1,
                                  price: 19900,
                                  finalPrice: 9900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  offerTags: [
                                    {
                                      matchText: "SILD",
                                    },
                                  ],
                                  itemBadge: {},
                                  badgesV2: {},
                                  itemNudgeType: "FinalPrice",
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "304 ratings",
                                      ratingCountV2: "304",
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
                                  offerIds: [
                                    "4046af76-9211-4a95-8a36-aa66bf251599",
                                  ],
                                  isNinetyninestoreItem: true,
                                  parentId: "13798474",
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
                                  id: "107030692",
                                  name: "Chicken fried rice",
                                  category: "Fried Rice",
                                  description:
                                    "A mouthwatering fusion of flavorful tender chicken and aromatic rice, cooked to perfection in a delightful blend of spices.",
                                  imageId: "27d68afd8eb4d8baac379a9dd1bd9333",
                                  inStock: 1,
                                  price: 19900,
                                  finalPrice: 14900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  offerTags: [
                                    {
                                      matchText: "SILD",
                                    },
                                  ],
                                  itemBadge: {},
                                  badgesV2: {},
                                  itemNudgeType: "FinalPrice",
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "702 ratings",
                                      ratingCountV2: "702",
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
                                  offerIds: [
                                    "58817826-efd7-49de-8ef6-3c877a593b70",
                                  ],
                                  isNinetyninestoreItem: true,
                                  parentId: "13798464",
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
                                  id: "107030693",
                                  name: "Siri special boneless chicken curry + egg fried rice",
                                  category: "Fried Rice",
                                  description:
                                    "A flavorful combination of tender boneless chicken curry and aromatic egg fried rice.",
                                  inStock: 1,
                                  price: 18900,
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
                                      rating: "4.4",
                                      ratingCount: "118 ratings",
                                      ratingCountV2: "118",
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
                                  parentId: "61320140",
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
                                  id: "107030694",
                                  name: "Frybit fried rice [full]",
                                  category: "Fried Rice",
                                  description:
                                    "A delectable medley of flavors, combining tender pieces of non-veg with perfectly seasoned, fried rice.",
                                  inStock: 1,
                                  price: 20500,
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
                                      rating: "4.7",
                                      ratingCount: "15 ratings",
                                      ratingCountV2: "15",
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
                                  parentId: "61320118",
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
                                  id: "107030695",
                                  name: "Frybit fried rice [half]",
                                  category: "Fried Rice",
                                  description:
                                    "Deliciously satisfying fried rice featuring delectable non-veg ingredients.",
                                  inStock: 1,
                                  price: 17900,
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
                                      rating: "4.7",
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
                                  parentId: "61320119",
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
                                  id: "107030696",
                                  name: "Special kaju chicken fried rice [full]",
                                  category: "Fried Rice",
                                  description:
                                    "Delicious non-Veg fried rice with a special twist of kaju chicken.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2025/2/22/82a3ef5f-c37f-4f3e-a688-5a5d46db1952_05077dfd-bbcc-4752-bc6c-f19f517aec67.jpg",
                                  inStock: 1,
                                  price: 20500,
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
                                      rating: "4.3",
                                      ratingCount: "120 ratings",
                                      ratingCountV2: "120",
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
                                  parentId: "61320141",
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
                                  id: "107030697",
                                  name: "Special kaju chicken fried rice [half]",
                                  category: "Fried Rice",
                                  description:
                                    "A delectable fusion of tender kaju chicken and perfectly cooked rice, delivering irresistible flavors in every bite.",
                                  inStock: 1,
                                  price: 18900,
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
                                      ratingCount: "11 ratings",
                                      ratingCountV2: "11",
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
                                  parentId: "61320142",
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
                                  id: "107030698",
                                  name: "Chicken mixed fried rice [full]",
                                  category: "Fried Rice",
                                  description:
                                    "A flavorful medley of tender chicken and fragrant rice, fried to perfection for a delightful harmony of textures.",
                                  inStock: 1,
                                  price: 23000,
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
                                      rating: "4.5",
                                      ratingCount: "59 ratings",
                                      ratingCountV2: "59",
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
                                  parentId: "61320107",
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
                                  id: "107030699",
                                  name: "Prawn mixed fried rice [full]",
                                  category: "Fried Rice",
                                  description:
                                    "Delicious fried rice filled with succulent prawns and flavorsome ingredients.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/3/15/116c4bca-bdd2-4407-a59f-871decd42e83_2c86e963-f70e-4f80-9fe2-c29b8a8d1fa5.JPG",
                                  inStock: 1,
                                  price: 23000,
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
                                      rating: "4.3",
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
                                  parentId: "61320137",
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
                                  id: "107030700",
                                  name: "Chicken mixed fried rice [half]",
                                  category: "Fried Rice",
                                  description:
                                    "Delicious blend of tender chicken and flavorful fried rice, a non-Veg delight!",
                                  inStock: 1,
                                  price: 20500,
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
                                  parentId: "61320108",
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
                                  id: "107030701",
                                  name: "Prawn mixed fried rice [half]",
                                  category: "Fried Rice",
                                  description:
                                    "Mouthwatering fried rice packed with juicy prawns and a medley of flavors.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2025/2/22/18e23eb4-7fd4-4261-8cf3-aec6737c35e9_20f51ef0-9a60-4821-b84f-924c27152260.jpg",
                                  inStock: 1,
                                  price: 20500,
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
                                      rating: "4.2",
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
                                  parentId: "61320138",
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
                                  id: "107030702",
                                  name: "Chicken winnings fried rice",
                                  category: "Fried Rice",
                                  description:
                                    "A flavorful and satisfying fried rice featuring tender chicken and a delightful medley of ingredients.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2025/2/22/1c39847b-2325-4df4-9098-39e90169b6c1_41a705c1-d168-4b74-a88f-8d5e41bc9e2d.jpg",
                                  inStock: 1,
                                  price: 20500,
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
                                  parentId: "61320110",
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
                          categoryId: "30020431",
                        },
                        {
                          title: "Veg",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107030686",
                                  name: "Veg fried rice",
                                  category: "Fried Rice",
                                  description:
                                    "A delightful blend of vegetables and perfectly cooked rice, fried to perfection.",
                                  imageId: "c14aa4e13486bd619744c89dee0d4360",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 12900,
                                  finalPrice: 9900,
                                  variants: {},
                                  variantsV2: {},
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
                                      rating: "4.2",
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
                                  cartContext: "quick_prep",
                                  offerIds: [
                                    "4046af76-9211-4a95-8a36-aa66bf251599",
                                  ],
                                  isNinetyninestoreItem: true,
                                  parentId: "13798481",
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
                                  id: "107030689",
                                  name: "Mushroom fried rice mix",
                                  category: "Fried Rice",
                                  description:
                                    "A delectable blend of savory mushrooms and tender rice, infused with rich flavors and perfect for any vegetarian craving a satisfying fried rice dish.",
                                  imageId: "72ff2f7425a184624c0ea410240f2b02",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 14900,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "48330188",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "(Serves 1)",
                                            default: 1,
                                            id: "152552806",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "(Serves 2)",
                                            price: 14400,
                                            id: "152552807",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
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
                                      rating: "4.5",
                                      ratingCount: "57 ratings",
                                      ratingCountV2: "57",
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
                                  parentId: "61320126",
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
                                  id: "107030713",
                                  name: "Paneer frd rc",
                                  category: "Fried Rice",
                                  description:
                                    "A delectable combination of golden-fried paneer and fragrant rice, offering a harmonious blend of flavors that will leave you craving for more.",
                                  imageId: "c8ed1411e931c69fea13e1af74e4a3b2",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 16600,
                                  finalPrice: 12900,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "48225337",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "(Serves 1)",
                                            default: 1,
                                            id: "152379306",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "(Serves 2)",
                                            price: 16000,
                                            id: "152379311",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
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
                                      rating: "4.4",
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
                                  cartContext: "quick_prep",
                                  offerIds: [
                                    "3858fb7b-7fc0-4ddc-a2df-f4a018092d40",
                                  ],
                                  isNinetyninestoreItem: true,
                                  parentId: "61320131",
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
                                  id: "107030687",
                                  name: "Veg manchuria fried rice mix",
                                  category: "Fried Rice",
                                  description:
                                    "Delight in the irresistible blend of flavors and textures in this delectable Veg Manchuria Fried Rice mix.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/3/15/9fc7461a-d2ca-4fe3-a774-9ca311c23cff_4196f04d-562b-4c93-b115-1f5231b0ad7e.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 14900,
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
                                      ratingCount: "251 ratings",
                                      ratingCountV2: "251",
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
                                  parentId: "61320147",
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
                                  id: "107030688",
                                  name: "Paneer fried rice mix",
                                  category: "Fried Rice",
                                  description:
                                    "Delight in a flavorful fusion of fragrant basmati rice and delectably spiced paneer, showcasing the perfect balance of textures and flavors in every bite.",
                                  imageId: "c8ed1411e931c69fea13e1af74e4a3b2",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 14900,
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
                                      rating: "4.3",
                                      ratingCount: "222 ratings",
                                      ratingCountV2: "222",
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
                                  parentId: "61320132",
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
                                  id: "107030690",
                                  name: "Special veg all mixed fried rice",
                                  category: "Fried Rice",
                                  description:
                                    "A flavorful assortment of mixed vegetables stir-fried with fragrant rice to create a delectable and satisfying vegetarian fried rice.",
                                  imageId: "b5cdafa265b2ff0f3eb1fbca3a62de34",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 17900,
                                  finalPrice: 13900,
                                  variants: {},
                                  variantsV2: {},
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
                                  offerTags: [
                                    {
                                      matchText: "SILD",
                                    },
                                  ],
                                  itemBadge: {},
                                  badgesV2: {},
                                  itemNudgeType: "FinalPrice",
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "215 ratings",
                                      ratingCountV2: "215",
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
                                  offerIds: [
                                    "bfc27fd8-346b-40b4-89c8-b4f3ceca3d91",
                                  ],
                                  isNinetyninestoreItem: true,
                                  parentId: "61320143",
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
                                  id: "107030712",
                                  name: "Veg all mixed frd",
                                  category: "Fried Rice",
                                  description:
                                    "A delightful medley of mixed vegetables and fried rice that will satisfy your cravings.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2025/2/22/b83bb250-fa66-4bd3-8d88-4fe2aace252d_5f480831-3b52-4f60-942a-950263211e2d.jpg",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 17900,
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
                                      rating: "2.9",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
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
                                  parentId: "61320145",
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
                                  id: "107030714",
                                  name: "Mushroom frd rc",
                                  category: "Fried Rice",
                                  description:
                                    "A tantalizing blend of mushrooms and flavorful seasonings expertly fried with fragrant rice, delivering a delightful and savory experience.",
                                  imageId: "9aa7ec61cea6a32f5502daecf80c1890",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 16600,
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
                                    aggregatedRating: {},
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "61320125",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "30020430",
                        },
                      ],
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2025/2/22/6535e0fc-8f0c-47df-9b23-64f3d0289843_eeb2e0d2-33e6-45ec-90ea-0ad7d98541d4.jpg",
                      categoryId: "30020423",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Starters",
                      categories: [
                        {
                          title: "Veg",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107030663",
                                  name: "Veg manchurian",
                                  category: "Starters",
                                  description:
                                    "A tantalizing fusion of vegetables and flavorful spices that will whet your appetite and leave you craving for more.",
                                  imageId: "f2a4365e1b8e2d0f45ceff7c65ec8917",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 12900,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "31670695",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "97992247",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 2100,
                                            id: "97992248",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
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
                                      ratingCount: "158 ratings",
                                      ratingCountV2: "158",
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
                                  parentId: "13798482",
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
                                  id: "107030664",
                                  name: "Chilli mushroom",
                                  category: "Starters",
                                  description:
                                    "A tantalizing medley of flavors and textures, this vegetarian starter is sure to please with its robust and savory profile.",
                                  imageId: "22513fb85800962b2389f77b30fbcb47",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 17900,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "31670696",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "97992249",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 3100,
                                            id: "97992250",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
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
                                  parentId: "61320112",
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
                                  id: "107030665",
                                  name: "Mushroom manchurian",
                                  category: "Starters",
                                  description:
                                    "A delectable blend of mushrooms in a savory sauce, Mushroom Manchurian is a perfect vegetarian starter bursting with flavors.",
                                  imageId: "22513fb85800962b2389f77b30fbcb47",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 17900,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "31670697",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "97992251",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 6100,
                                            id: "97992252",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
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
                                      rating: "4.7",
                                      ratingCount: "10 ratings",
                                      ratingCountV2: "10",
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
                                  parentId: "61320127",
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
                                  id: "107030666",
                                  name: "Chilli paneer",
                                  category: "Starters",
                                  description:
                                    "A flavorful and perfectly seasoned appetizer bursting with delightful flavors and Indian-inspired spices.",
                                  imageId: "92b7020733aaf22fb598eef3ebc45ce8",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 17900,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "31670698",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "97992253",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 7100,
                                            id: "97992254",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
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
                                      ratingCount: "32 ratings",
                                      ratingCountV2: "32",
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
                                  imageBadges: [
                                    {
                                      imageId:
                                        "merch_bau/High%20Protein%201_1.png",
                                    },
                                  ],
                                  parentId: "61320113",
                                  menuFilterIds: ["EATRIGHT", "VEG", "offer"],
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
                                  id: "107030668",
                                  name: "Mushroom 65",
                                  category: "Starters",
                                  description:
                                    "A delightful vegetarian starter featuring tender mushrooms, bursting with flavor and perfectly seasoned.",
                                  imageId: "22513fb85800962b2389f77b30fbcb47",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 17900,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "31670699",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "97992255",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 7100,
                                            id: "97992256",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
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
                                      rating: "4.9",
                                      ratingCount: "10 ratings",
                                      ratingCountV2: "10",
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
                                  parentId: "61320124",
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
                                  id: "107030669",
                                  name: "Paneer manchurian",
                                  category: "Starters",
                                  description:
                                    "A flavorful and tantalizing vegetarian starter full of Asian-inspired flavors.",
                                  imageId: "59359a27ad278a25ddd99ebf76c21c38",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 17900,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "31670700",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "97992257",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 8000,
                                            id: "97992258",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
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
                                      ratingCount: "22 ratings",
                                      ratingCountV2: "22",
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
                                  parentId: "61320133",
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
                                  id: "107030667",
                                  name: "Paneer 65",
                                  category: "Starters",
                                  description:
                                    "A delectable vegetarian starter that packs a perfect blend of flavors and textures.",
                                  imageId: "82c24b97ef70479ccb77719ff5b02559",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 17900,
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
                                      rating: "4.9",
                                      ratingCount: "9 ratings",
                                      ratingCountV2: "9",
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
                                  parentId: "61320130",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "30020426",
                        },
                        {
                          title: "Non Veg",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107030670",
                                  name: "Chicken 65",
                                  category: "Starters",
                                  description:
                                    "A tantalizing and flavorsome chicken dish bursting with a medley of aromatic spices.",
                                  imageId: "499a9b93fdb61894d7bffa2c3cf8c333",
                                  inStock: 1,
                                  price: 18900,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "48225331",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "(Serves 1)",
                                            default: 1,
                                            id: "152379294",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "(Serves 2)",
                                            price: 18200,
                                            id: "152379295",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
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
                                      rating: "3.8",
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
                                  imageBadges: [
                                    {
                                      imageId:
                                        "merch_bau/High%20Protein%201_1.png",
                                    },
                                  ],
                                  parentId: "13798463",
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
                                  id: "107030677",
                                  name: "Chicken winglets",
                                  category: "Starters",
                                  description:
                                    "Tender and succulent chicken winglets, perfect to kick off your meal with a delectable burst of flavor.",
                                  inStock: 1,
                                  price: 19900,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "48330182",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "(10 Piece)",
                                            default: 1,
                                            id: "152552790",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "(12 Piece)",
                                            price: 3600,
                                            id: "152552794",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
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
                                      rating: "4.1",
                                      ratingCount: "20 ratings",
                                      ratingCountV2: "20",
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
                                  parentId: "91228523",
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
                                  id: "107030671",
                                  name: "Chicken lollipop [6 pieces]",
                                  category: "Starters",
                                  description:
                                    "Delicious and succulent chicken lollipops, a perfect appetizer for your non-vegetarian cravings.",
                                  imageId: "828802e111b361742adb1f57849e67bd",
                                  inStock: 1,
                                  price: 18900,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "48225333",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "(6 Piece)",
                                            default: 1,
                                            id: "152379298",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "(12 Piece)",
                                            price: 18200,
                                            id: "152379299",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
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
                                      rating: "4.4",
                                      ratingCount: "298 ratings",
                                      ratingCountV2: "298",
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
                                  parentId: "61320105",
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
                                  id: "107030672",
                                  name: "Lemon chicken",
                                  category: "Starters",
                                  description:
                                    "Tender chicken infused with zesty lemon, bursting with flavors that will tantalize your taste buds and leave you craving for more.",
                                  imageId: "db440f0c6985697a88f07716cd3c1997",
                                  inStock: 1,
                                  price: 18900,
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
                                      rating: "4.3",
                                      ratingCount: "9 ratings",
                                      ratingCountV2: "9",
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
                                  parentId: "61320121",
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
                                  id: "107030673",
                                  name: "Chicken manchurian",
                                  category: "Starters",
                                  description:
                                    "A tantalizing blend of tender chicken in a delectable sauce, bursting with flavors that are sure to delight your taste buds.",
                                  imageId: "64c0db2100f42648892489ce372a4c0a",
                                  inStock: 1,
                                  price: 18900,
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
                                      rating: "4.4",
                                      ratingCount: "122 ratings",
                                      ratingCountV2: "122",
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
                                  parentId: "13798468",
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
                                  id: "107030674",
                                  name: "Chill chicken",
                                  category: "Starters",
                                  description:
                                    "Indulge in the irresistible flavors of perfectly seasoned, tender chicken, bursting with savory goodness.",
                                  imageId: "3882f640e1ed7f4d2c841aa957f2f322",
                                  inStock: 1,
                                  price: 18900,
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
                                      rating: "4.2",
                                      ratingCount: "106 ratings",
                                      ratingCountV2: "106",
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
                                  parentId: "61320111",
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
                                  id: "107030675",
                                  name: "Chicken bonless fry",
                                  category: "Starters",
                                  description:
                                    "A succulent and flavorful chicken starter that is sure to tantalize your taste buds with every bite.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2025/2/22/ccaf7175-73f1-41e9-a204-e4e919711228_15599a2d-1a70-41b2-ba7d-13449d8a0f52.jpg",
                                  inStock: 1,
                                  price: 18900,
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
                                  parentId: "61320104",
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
                                  id: "107030676",
                                  name: "Kadai chicken",
                                  category: "Starters",
                                  imageId: "c391f06b93a53fc55aed21bd27a4fb12",
                                  inStock: 1,
                                  price: 18900,
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
                                      rating: "4.4",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
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
                                  parentId: "61320120",
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
                                  id: "107030678",
                                  name: "Mughal chicken",
                                  category: "Starters",
                                  description:
                                    "A delectable Mughal-inspired chicken dish that is sure to tantalize your taste buds.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2025/2/22/493cdaea-bd60-41b3-b182-1b9fabbb2722_c87454a0-e97e-48d6-b5b9-23d4b8d43614.jpg",
                                  inStock: 1,
                                  price: 18900,
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
                                  parentId: "61320123",
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
                          categoryId: "30020427",
                        },
                      ],
                      image: "f2a4365e1b8e2d0f45ceff7c65ec8917",
                      categoryId: "30020421",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Noodles",
                      categories: [
                        {
                          title: "Veg",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107030679",
                                  name: "Veg noodles",
                                  category: "Noodles",
                                  description:
                                    "Delicious and flavorful, this dish combines tender noodles with a delightful mix of garden-fresh vegetables.",
                                  imageId: "714b2351ad3fdb6e0711e96de8a93495",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 19900,
                                  finalPrice: 9900,
                                  variants: {},
                                  variantsV2: {},
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
                                  offerTags: [
                                    {
                                      matchText: "SILD",
                                    },
                                  ],
                                  itemBadge: {},
                                  badgesV2: {},
                                  itemNudgeType: "FinalPrice",
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "143 ratings",
                                      ratingCountV2: "143",
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
                                  offerIds: [
                                    "4046af76-9211-4a95-8a36-aa66bf251599",
                                  ],
                                  isNinetyninestoreItem: true,
                                  parentId: "13798483",
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
                                  id: "107030717",
                                  name: "Mushroom noodles",
                                  category: "Noodles",
                                  description:
                                    "Delight in a delectable harmony of savory mushrooms and tender noodles, delivering exceptional flavor in every bite.",
                                  imageId: "1f12bf227ecffce3d096e75b5f70ecbc",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 16600,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "48225335",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "(Serves 1)",
                                            default: 1,
                                            id: "152379302",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "(Serves 2)",
                                            price: 16000,
                                            id: "152379305",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
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
                                      rating: "2.3",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
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
                                  parentId: "61320128",
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
                                  id: "107030716",
                                  name: "Paneer noodles",
                                  category: "Noodles",
                                  description:
                                    "Tantalizingly flavorful and satisfyingly comforting, these vegetarian noodles boast a delightful combination of soft paneer and delectably seasoned noodles.",
                                  imageId: "0b4a45fa8011a6c0a88a41f178fa9f8d",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 16600,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "48225341",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "(Serves 1)",
                                            default: 1,
                                            id: "152379314",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "(Serves 2)",
                                            price: 16000,
                                            id: "152379315",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
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
                                      rating: "4.2",
                                      ratingCount: "15 ratings",
                                      ratingCountV2: "15",
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
                                  parentId: "61320134",
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
                                  id: "107030680",
                                  name: "Veg manchuria noodles mix",
                                  category: "Noodles",
                                  description:
                                    "A tantalizing fusion of flavors and textures, this delightful mix of noodles and veggies is a vegetarian delight.",
                                  imageId: "f0173d86355e64de923105279a5ffbfe",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 19900,
                                  finalPrice: 9900,
                                  variants: {},
                                  variantsV2: {},
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
                                  offerTags: [
                                    {
                                      matchText: "SILD",
                                    },
                                  ],
                                  itemBadge: {},
                                  badgesV2: {},
                                  itemNudgeType: "FinalPrice",
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "571 ratings",
                                      ratingCountV2: "571",
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
                                  offerIds: [
                                    "4046af76-9211-4a95-8a36-aa66bf251599",
                                  ],
                                  isNinetyninestoreItem: true,
                                  parentId: "61320148",
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
                                  id: "107030681",
                                  name: "Paneer noodles mix",
                                  category: "Noodles",
                                  description:
                                    "A delightful fusion of paneer and noodles, capturing the essence of savory flavors and aromatic spices.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2025/2/22/8d30ce0c-edab-4fd4-9f93-6151a310a07c_c4447faf-0d44-400d-a8c4-e414ec2ca431.jpg",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 16900,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "48225343",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "(Serves 1)",
                                            default: 1,
                                            id: "152379318",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "(Serves 2)",
                                            price: 14400,
                                            id: "152379319",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
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
                                      rating: "4.9",
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
                                  parentId: "61320135",
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
                                  id: "107030682",
                                  name: "Mushroom noodles mix",
                                  category: "Noodles",
                                  description:
                                    "Savor the earthy flavors and delightful mix of mushrooms blended with noodles in this tantalizing veggie dish.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/3/25/f47c4efb-0492-499c-89df-54eadce5ab6f_ef2f0153-77cb-4813-9151-766bbb7c02b3.jpg",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 16900,
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
                                  parentId: "61320129",
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
                                  id: "107030683",
                                  name: "Special veg all mixed noodles",
                                  category: "Noodles",
                                  description:
                                    "Delight in a delightful medley of mixed vegetables tossed with perfectly cooked noodles.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/3/15/6f4793fc-9f2a-4981-ac2d-748fa7b63827_e3e3c143-9cb7-48c8-bf43-657671ed998e.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 19900,
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
                                      rating: "3.9",
                                      ratingCount: "41 ratings",
                                      ratingCountV2: "41",
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
                                  parentId: "61320144",
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
                                  id: "107030715",
                                  name: "Veg all mixed noodles",
                                  category: "Noodles",
                                  description:
                                    "Savor the medley of fresh vegetables and deliciously seasoned noodles in this delectable, tossed-together dish.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 19900,
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
                                    aggregatedRating: {},
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "61320146",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "30020428",
                        },
                        {
                          title: "Non Veg",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107030684",
                                  name: "Egg noodles",
                                  category: "Noodles",
                                  description:
                                    "A delectable combination of flavorful egg noodles that will satisfy your noodle cravings.",
                                  imageId: "cf9a37a5438fa92013d9b08862b89a3b",
                                  inStock: 1,
                                  price: 19900,
                                  finalPrice: 9900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  offerTags: [
                                    {
                                      matchText: "SILD",
                                    },
                                  ],
                                  itemBadge: {},
                                  badgesV2: {},
                                  itemNudgeType: "FinalPrice",
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.0",
                                      ratingCount: "227 ratings",
                                      ratingCountV2: "227",
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
                                  offerIds: [
                                    "4046af76-9211-4a95-8a36-aa66bf251599",
                                  ],
                                  isNinetyninestoreItem: true,
                                  parentId: "13798476",
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
                                  id: "107030685",
                                  name: "Chicken noodles",
                                  category: "Noodles",
                                  description:
                                    "A delectable combination of flavorful chicken and tender noodles, this dish is sure to satisfy your cravings.",
                                  imageId: "530f9cc6809fd316f928ce82d8b194fb",
                                  inStock: 1,
                                  price: 16900,
                                  finalPrice: 13500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  offerTags: [
                                    {
                                      matchText: "SILD",
                                    },
                                  ],
                                  itemBadge: {},
                                  badgesV2: {},
                                  itemNudgeType: "FinalPrice",
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "674 ratings",
                                      ratingCountV2: "674",
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
                                  offerIds: [
                                    "964cf92a-7a80-4415-ad62-e5a74502f40d",
                                  ],
                                  isNinetyninestoreItem: true,
                                  parentId: "13798469",
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
                          ],
                          subtitleSuffix: {},
                          categoryId: "30020429",
                        },
                      ],
                      image: "714b2351ad3fdb6e0711e96de8a93495",
                      categoryId: "30020422",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Dry Items",
                      categories: [
                        {
                          title: "Non Veg",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107030704",
                                  name: "Prawan 65",
                                  category: "Dry Items",
                                  description:
                                    "Crispy, flavorful and tantalizingly aromatic 65 delicacy featuring succulent and juicy prawns prepared in a dry style.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/3/11/d0471bac-0162-4c28-a54c-a00d010f08eb_e4047b0c-bf75-4060-aee9-865bc4301cae_compressed",
                                  inStock: 1,
                                  price: 21600,
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
                                      rating: "4.6",
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
                                  parentId: "61320136",
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
                                  id: "107030705",
                                  name: "Chilli prawn",
                                  category: "Dry Items",
                                  description:
                                    "A delectable blend of succulent prawns cooked to perfection in a tantalizing and flavorful sauce.",
                                  imageId: "91e28711c446bd163ddabe06c7040a24",
                                  inStock: 1,
                                  price: 21600,
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
                                      rating: "3.6",
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
                                  parentId: "61320114",
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
                                  id: "107030706",
                                  name: "Schezwan prawn",
                                  category: "Dry Items",
                                  description:
                                    "Tempt your taste buds with this flavorful and exotic prawn dish.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/3/25/935e9357-2e8e-454a-a435-d6f7d9d67df1_6d161a68-ac28-44ea-ae18-9cfe527de710.jpg_compressed",
                                  inStock: 1,
                                  price: 24200,
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
                                  parentId: "61320139",
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
                                  id: "107030707",
                                  name: "Bone fry",
                                  category: "Dry Items",
                                  description:
                                    "Crispy and succulent, this dry non-veg delight is a must-try for meat lovers.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2025/2/22/b94b6f1b-101f-403f-aaf4-1fabbd8e001f_c350703a-a54f-4074-8e26-b1bf1f69da96.jpg",
                                  inStock: 1,
                                  price: 19100,
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
                                  parentId: "61320103",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "30020432",
                        },
                        {
                          title: "Veg",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107030718",
                                  name: "Paneer     65",
                                  category: "Dry Items",
                                  description:
                                    "A flavorful and aromatic vegetarian delight with a crispy exterior and a succulent center, perfect for dry item lovers.",
                                  imageId: "4dcf9a31d80ae4a73bb152269f6f5d45",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 17900,
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
                                      rating: "4.9",
                                      ratingCount: "9 ratings",
                                      ratingCountV2: "9",
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
                                  parentId: "61320130",
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
                                  id: "107030719",
                                  name: "Mashrooom",
                                  category: "Dry Items",
                                  description:
                                    "A delightful blend of earthy mushrooms sauteed to perfection, presenting a flavor-packed experience in every bite.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 17900,
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
                                    aggregatedRating: {},
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "61320122",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "30020433",
                        },
                      ],
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/3/11/d0471bac-0162-4c28-a54c-a00d010f08eb_e4047b0c-bf75-4060-aee9-865bc4301cae_compressed",
                      categoryId: "30020424",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Fish Fry Items",
                      categories: [
                        {
                          title: "Non Veg",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "107030708",
                                  name: "Apollo fish",
                                  category: "Fish Fry Items",
                                  description:
                                    "A tantalizing dish showcasing the exquisite flavors of the sea, Apollo fish is a delectable non-veg delight that will leave you craving for more.",
                                  imageId: "9e98c9fe97b9d0b872d7ddcfb2643f79",
                                  inStock: 1,
                                  price: 20400,
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
                                  imageBadges: [
                                    {
                                      imageId:
                                        "merch_bau/High%20Protein%201_1.png",
                                    },
                                  ],
                                  parentId: "61320102",
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
                                  id: "107030709",
                                  name: "Fish fry",
                                  category: "Fish Fry Items",
                                  description:
                                    "Crispy and flavorful, this classic fried fish dish is a delectable treat for seafood lovers.",
                                  imageId: "b101c20a626eb0d68a797dae5848035f",
                                  inStock: 1,
                                  price: 19100,
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
                                      rating: "4.3",
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
                                  parentId: "61320117",
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
                                  id: "107030710",
                                  name: "Fish 65",
                                  category: "Fish Fry Items",
                                  description:
                                    "Crispy and flavorful, this fish fry item will satisfy your cravings and leave you wanting more.",
                                  inStock: 1,
                                  price: 19100,
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
                                  parentId: "61320115",
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
                                  id: "107030711",
                                  name: "Fish chilli",
                                  category: "Fish Fry Items",
                                  description:
                                    "Crispy, flavorful fish fry bursting with bold and tangy flavors.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/3/25/2e6315c6-3616-4aaa-a0c0-c3fda6b224c7_b6bfe5fd-f06b-428e-b2f1-081ef66a8920.jpg_compressed",
                                  inStock: 1,
                                  price: 19100,
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
                                      rating: "4.9",
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
                                  parentId: "61320116",
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
                          categoryId: "30020434",
                        },
                      ],
                      image: "9e98c9fe97b9d0b872d7ddcfb2643f79",
                      categoryId: "30020425",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Large Order",
                      categories: [
                        {
                          title: "Biryani",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "195711808",
                                  name: "Chicken Mughlai Biryani( Pack of 2)",
                                  category: "Large Order",
                                  price: 39800,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11:15 am, tomorrow",
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
                                  parentId: "119333912",
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
                                  id: "195711809",
                                  name: "Siri Special Boneless Biryani( Pack of 2)",
                                  category: "Large Order",
                                  price: 40000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11:15 am, tomorrow",
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
                                  parentId: "119333915",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "72682873",
                        },
                        {
                          title: "Others",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "195782703",
                                  name: "Chicken Lollipop Biryani( Pack of 2)",
                                  category: "Large Order",
                                  price: 39800,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11:15 am, tomorrow",
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
                                  parentId: "119389169",
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
                                  id: "195782716",
                                  name: "Chicken Fry-Bit Biryani( Pack of 2)",
                                  category: "Large Order",
                                  price: 37800,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11:15 am, tomorrow",
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
                                  parentId: "119389167",
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
                                  id: "195782723",
                                  name: "Chicken Dum Biryani( Pack of 2)",
                                  category: "Large Order",
                                  price: 35800,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11:15 am, tomorrow",
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
                                  parentId: "119389166",
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
                                  id: "195782729",
                                  name: "Chicken lollipop [6 pieces]( Pack of 2)",
                                  category: "Large Order",
                                  price: 37800,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11:15 am, tomorrow",
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
                                  parentId: "119389168",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "72730151",
                        },
                        {
                          title: "Starters",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "195711810",
                                  name: "Veg manchurian( Pack of 3)",
                                  category: "Large Order",
                                  isVeg: 1,
                                  price: 38700,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11:15 am, tomorrow",
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
                                  parentId: "119333916",
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
                                  id: "195711811",
                                  name: "Chicken manchurian( Pack of 2)",
                                  category: "Large Order",
                                  price: 37800,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11:15 am, tomorrow",
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
                                  parentId: "115610070",
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
                                  id: "195711812",
                                  name: "Mushroom manchurian( Pack of 2)",
                                  category: "Large Order",
                                  isVeg: 1,
                                  price: 35800,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11:15 am, tomorrow",
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
                                  parentId: "119333913",
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
                                  id: "195711813",
                                  name: "Paneer manchurian( Pack of 2)",
                                  category: "Large Order",
                                  isVeg: 1,
                                  price: 35800,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11:15 am, tomorrow",
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
                                  parentId: "119333914",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "72682874",
                        },
                      ],
                      categoryId: "72682809",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Biryani",
                      categories: [
                        {
                          title: "Non Veg",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "123028256",
                                  name: "Chicken Dum Biryani",
                                  category: "Biryani",
                                  description:
                                    "A savory, fragrant delight that brings together succulent chicken and aromatic rice in a perfect medley of flavors.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/3/25/e8cfc408-b9f1-4e96-bf6f-5fec2c18176f_388a4eba-85b9-42d1-9437-6fc3e4d71901.jpg_compressed",
                                  price: 19900,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11:15 am, tomorrow",
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
                                      ratingCount: "51 ratings",
                                      ratingCountV2: "51",
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
                                  parentId: "56201690",
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
                                  id: "123028257",
                                  name: "Chicken Fry-Bit Biryani",
                                  category: "Biryani",
                                  description:
                                    "Savor the flavors of tender chicken and fragrant biryani in this delectable non-veg dish.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/3/15/b09b16a1-aa55-48b3-a40e-75e04eaecaf6_b6afe352-03dd-4073-b2ff-2422a0acf117.JPG",
                                  price: 18900,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11:15 am, tomorrow",
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
                                      ratingCount: "130 ratings",
                                      ratingCountV2: "130",
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
                                  parentId: "56201692",
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
                                  id: "123028258",
                                  name: "Chicken Mughlai Biryani",
                                  category: "Biryani",
                                  description:
                                    "A tantalizing blend of fragrant rice and succulent chicken, this Mughlai-inspired Biryani is a savory delight for meat lovers.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/3/14/f7e836c5-6d35-44f2-a8d5-f17a2ff70d85_41f5f4df-a44d-4aa6-ac19-3b1b2339ec58.jpg",
                                  price: 19900,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11:15 am, tomorrow",
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
                                      ratingCount: "215 ratings",
                                      ratingCountV2: "215",
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
                                  parentId: "70722146",
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
                                  id: "123028259",
                                  name: "Chicken Lollipop Biryani",
                                  category: "Biryani",
                                  description:
                                    "A mouthwatering blend of tender chicken and fragrant rice, the Chicken Lollipop Biryani is a delightful feast for the senses.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/3/17/1ae84be2-fa6d-4a00-a344-6748770795d7_e2f2593e-7b02-40d1-bad7-907228826d88.jpg_compressed",
                                  price: 19900,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11:15 am, tomorrow",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
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
                                      rating: "4.4",
                                      ratingCount: "126 ratings",
                                      ratingCountV2: "126",
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
                                  parentId: "70722145",
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
                                  id: "123028260",
                                  name: "Chicken Wings Biryani",
                                  category: "Biryani",
                                  description:
                                    "A flavorful combination of tender chicken wings and aromatic biryani rice.",
                                  price: 19900,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11:15 am, tomorrow",
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
                                  parentId: "70722147",
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
                                  id: "123028262",
                                  name: "Siri Special Boneless Biryani",
                                  category: "Biryani",
                                  description:
                                    "A flavorful and succulent boneless biryani that will tantalize your taste buds.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/3/25/eb038d29-0d5e-4637-bd64-f9d6055acb6b_a3722c5d-03ba-420f-b3c8-2c6ce9d4c4ff.jpg_compressed",
                                  price: 20000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11:15 am, tomorrow",
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
                                      ratingCount: "139 ratings",
                                      ratingCountV2: "139",
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
                                  parentId: "70722148",
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
                                  id: "144384865",
                                  name: "Chicken Dum Biryani 199",
                                  category: "Biryani",
                                  price: 19900,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11:15 am, tomorrow",
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
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
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
                                  parentId: "85177233",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "38812453",
                        },
                      ],
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/3/25/e8cfc408-b9f1-4e96-bf6f-5fec2c18176f_388a4eba-85b9-42d1-9437-6fc3e4d71901.jpg_compressed",
                      categoryId: "38812452",
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
                      text: ["License No. 10121029000207"],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: "Siri Fast Foods",
                      area: "Bhanugudi",
                      completeAddress:
                        "X69R+4V2, G O Colony, Kakinada, Andhra Pradesh 533003",
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
  sid: "q0g6a01ed78-9acd-46df-bea1-f203b07c3",
  deviceId: "ded857e0-08bf-e46d-4fdd-470a678205c4",
  csrfToken: "i998SYsAjpCr-X74eQ-tEx6FWeR05VfVvQoQmE8E",
};
