import React from "react"
import {View, Text, FlatList, TouchableOpacity} from "react-native"
import ContentContainer from "../CategoriesScreen/ContentContainer"
import HeaderContainer from "../CategoriesScreen/HeaderContainer"
import EventButtonCard from "../../components/EventButtonCard"
import globalStyles from "../../styles/globalStyles"
import votationsJson from "./votations.json"

export default function HomeScreen(){
    return(
        <View style={globalStyles.container}>
            <HeaderContainer styleI={{flex:0.5}}>
                <Text>vndfnf</Text>
            </HeaderContainer>
            <ContentContainer>
                <FlatList
                    data={votationsJson.votations}
                    renderItem={({item}) => <EventButtonCard
                                                title={item.title}
                                                date={item.date}
                                                status={item.status}
                                                backgroundImage={item.image}
                                            />}
                    keyExtractor={item => item.id}
                    ListHeaderComponent={() => (
                        <Text>VOTACIONES</Text>
                    )}
                />
            </ContentContainer>
        </View>
    )
}