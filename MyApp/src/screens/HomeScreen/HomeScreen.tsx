import React from "react"
import {View, Text, FlatList} from "react-native"
import ContentContainer from "../../components/ContentContainer"
import HeaderContainer from "../../components/HeaderContainer"
import EventButtonCard from "../../components/EventButtonCard"

import globalStyles from "../../styles/globalStyles"
import votationsJson from "./votations.json"//Json con la información de las votaciones


//Pantalla de Inicio donde se veran las votaciones disponibles
export default function HomeScreen(){
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