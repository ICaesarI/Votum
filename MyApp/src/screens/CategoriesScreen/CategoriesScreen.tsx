import React, { useState } from 'react'
import {View, Text} from 'react-native'
import HeaderContainer from '../../components/HeaderContainer';
import ContentContainer from '../../components/ContentContainer';
import CategoryButton from '../../components/CategoryButton';
import categoriesScreenStyles from '../../styles/CategoriesScreen/CategoriesScreenStyles';
import catgoriesJson from "./categories.json"

import globalStyles from '../../styles/globalStyles';

//Pantalla donde el usuario elegira sus categorias para las votaciones

export default function CategoriesScreen(){
    const [list, setList] = useState<number[]>([]);//Lista para guardar los id's de categorias seleccionadas

    const addCategory = (id:number) => {//Logica para añadir o sacar un id de la lista
        if(list.includes(id)){
           setList(list.filter(item => item !== id));
        }else{
            setList(prevList => [...prevList,id]);
        }
    }
    return(
        <View style={globalStyles.container}>
            <HeaderContainer>
                <Text></Text>
            </HeaderContainer>

            <ContentContainer>
                <View style={categoriesScreenStyles.categoryContainer}>
                    {catgoriesJson.categories.map((category) => (//Se toma la info del json para mapearlo a un componente
                        <CategoryButton 
                            key={category.id} 
                            id={category.id} 
                            name={category.name}
                            addCategory={addCategory} 
                        />
                    ))}
                </View>
            </ContentContainer>
        </View>
    );
}

