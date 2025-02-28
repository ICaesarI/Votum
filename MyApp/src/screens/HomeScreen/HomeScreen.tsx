import React from "react"
import {View, Text, FlatList} from "react-native"
import ContentContainer from "../../components/ContentContainer"
import HeaderContainer from "../../components/HeaderContainer"
import EventButtonCard from "../../components/EventButtonCard"
import {StackNavigationProp } from "@react-navigation/stack";
import {RootStackParamList} from "../../navigation/StackNavigator"

import globalStyles from "../../styles/globalStyles"
import votationsJson from "./votations.json"//Json con la información de las votaciones

type navigation = StackNavigationProp<RootStackParamList, "Home">;

interface Props{
    navigation:navigation
}

//Pantalla de Inicio donde se veran las votaciones disponibles
export default function HomeScreen({navigation}:Props){
    return(
        <View style={globalStyles.container}>
            <HeaderContainer styleI={{flex:0.5}}>
                <Text>vndfnf</Text>
            </HeaderContainer>
            <ContentContainer>
                <FlatList //Lista que muestra las votaciones
                    data={votationsJson.votations}
                    renderItem={({item}) => <EventButtonCard //La informacion de cada elemento del json se mapea en un componente 
                                                title={item.title}
                                                date={item.date}
                                                status={item.status}
                                                backgroundImage={item.image}
                                                key={item.id}
                                                navigation={navigation}
                                            />}
                    keyExtractor={item => item.id}
                    ListHeaderComponent={() => (//Lista de lo que abra en el header de la lista
                        <Text>VOTACIONES</Text>
                    )}
                />
            </ContentContainer>
        </View>
    )
}