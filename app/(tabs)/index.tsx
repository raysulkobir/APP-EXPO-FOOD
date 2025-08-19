import { COLORS } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { homeStyles } from "../../assets/styles/home.styles";
import { MealAPI } from "../../services/mealAPI";

const HomeScreen = () => {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [recipes, setRecipes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [featuredRecipe, setFeaturedRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const loadData = async () => {
        try {
            setLoading(true);

            const [apiCategories, randomMeals, featuredMeal] = await Promise.all([
                MealAPI.getCategories(),
                MealAPI.getRandomMeals(12),
                MealAPI.getRandomMeal(),
            ]);

            const transformedFeatured = MealAPI.transformMealData(featuredMeal);
            setFeaturedRecipe(transformedFeatured);
        }catch(error) {
            console.log("Error loading the data", error);
        } finally {
            setLoading(false);
        }
      
    }

      useEffect(() => {
        loadData();
      }, []);

    return (
        <View style={homeStyles.container}>
            <ScrollView showsHorizontalScrollIndicator={false}>
                {/*  ANIMAL ICONS */}
                <View style={homeStyles.welcomeSection}>
                    <Image 
                        source={require('../../assets/images/lamb.png')} 
                        style={{ 
                            width: 100, 
                            height: 100
                        }}
                    />

                    <Image
                        source={require('../../assets/images/chicken.png')}
                        style={{
                            width: 100,
                            height: 100
                        }}
                    />

                    <Image
                        source={require('../../assets/images/pork.png')}
                        style={{
                            width: 100,
                            height: 100
                        }}
                    />
                </View>

                {featuredRecipe && (
                    <View style={homeStyles.featuredSection}>
                        <TouchableOpacity
                            style={homeStyles.featuredCard}
                        >
                            <Image
                                source={{ uri: featuredRecipe.image }}
                                style={homeStyles.featuredImage}
                                contentFit="cover"
                                transition={500}
                            />
                            <View style={homeStyles.featuredOverlay}>
                                <View style={homeStyles.featuredBadge}>
                                    <Text style={homeStyles.featuredBadgeText} >Featured</Text>
                                </View>

                                <View style={homeStyles.featuredContent}>
                                    <Text style={homeStyles.featuredTitle} numberOfLines={2}>
                                        {featuredRecipe.title}
                                    </Text>

                                    <View style={homeStyles.featuredMeta}>
                                        <View style={homeStyles.metaItem}>
                                            <Ionicons name="time-outline" size={16} color={COLORS.white} />
                                            <Text style={homeStyles.metaText}>{featuredRecipe.cookTime}</Text>
                                        </View>

                                        <View style={homeStyles.metaItem}>
                                            <Ionicons name="people-outline" size={16} color={COLORS.white} />
                                            <Text style={homeStyles.metaText}>{featuredRecipe.servings}</Text>
                                        </View>

                                        <View style={homeStyles.metaItem}>
                                            <Ionicons name="location-outline" size={16} color={COLORS.white} />
                                            <Text style={homeStyles.metaText}>{featuredRecipe.area}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            </ScrollView>
        </View>
    )
}

export default HomeScreen