import React from "react";
import {View, Text} from "react-native";
import HeaderContainer from "../../components/HeaderContainer";
import ContentContainer from "../../components/ContentContainer";
import globalStyles from "../../styles/globalStyles";
import PreviousVotesButton from "./PreviousVotesButton";

import previosVotesJson from "./previousVotes.json"
import previousVotesScreenStyles from "../../styles/PreviousVotesScreen/previousVotesScreenStyles"

export default function PreviousVotesScreen(){
    return(
        <View style={globalStyles.container}>
            <HeaderContainer>
                <Text>PREVIOUS VOTES SCREEN</Text>
            </HeaderContainer>
            <ContentContainer>
                <View style={previousVotesScreenStyles.previousVotesButtonContainer}>
                    {previosVotesJson.previousVotes.map((item) => (
                        <PreviousVotesButton name={item.name} category={item.category} key={item.id}/>
                    ))}
                </View>
            </ContentContainer>
        </View>
    )
}