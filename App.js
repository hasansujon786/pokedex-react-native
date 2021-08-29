import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Pressable, View, SafeAreaView } from 'react-native';
import * as Speech from 'expo-speech';

import Header from './components/Header'
import Cover from './components/Cover'
import Display from './components/Display'
import Colors from './constant/colors'
import { DISPLAY_MARGIN } from './constant/shared'
import { fetchPokemonById } from './hooks/fetchPokemon'

export default function App() {
  const [isCoverOpen, setIsCoverOpen] = useState(false)
  const handleCoverToggle = () => {
    setIsCoverOpen(isOpen => {
      if (isOpen) updatePokemon()
      return !isOpen
    })
  }

  const [isLoading, setIsLoading] = useState(true)
  const [pokemon, setPokemon] = useState({
    name: '',
    description: '',
    image: null,
  });
  const updatePokemon = async () => {
    setIsLoading(true)
    const pokemonID =
      Math.floor(Math.random() * 150) + 1;

    const pokemon = await fetchPokemonById(pokemonID);
    setPokemon(pokemon);
    setIsLoading(false)
  };

  const [isFlashLightOn, setIsFlashLightOn] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const sayPokemonName = (pokemon) => {
    if (isSpeaking) return
    Speech.speak(
      `${pokemon.name}: ${pokemon.description}`,
      {
        language: 'en-US',
        pitch: 0.5,
        rate: 1.1,
        onStart: () => {
          setIsSpeaking(true)
          setIsFlashLightOn(true)
        },
        onDone: () => {
          setIsSpeaking(false)
          setIsFlashLightOn(false)
        },
        onStopped: () => {
          setIsSpeaking(false)
          setIsFlashLightOn(false)
        }
      }
    );
  };

  useEffect(() => {
    updatePokemon();
  }, []);

  useEffect(() => {
    if (isCoverOpen && !isLoading) {
      setIsSpeaking(false)
      sayPokemonName(pokemon)
    } else {
      Speech.stop();
    }
  }, [isCoverOpen, isLoading]);


  return (
    <SafeAreaView style={styles.screen}>
      <Header isFlashLightOn={isFlashLightOn} isLoading={isLoading} />
      <Pressable style={{ flex: 1, padding: 10, paddingBottom: 0 }} onPress={handleCoverToggle}>
        <View style={{ backgroundColor: Colors.red, flex: 1 }}>
          <Display image={pokemon.image} />
          <Pressable onPress={() => sayPokemonName(pokemon)} style={styles.greenBox} />
        </View>
      </Pressable>

      <Cover isOpen={isCoverOpen} onPress={handleCoverToggle} />
      <StatusBar hidden style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.redDark
  },
  greenBox: {
    width: 160,
    height: 88,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: Colors.greenDark,
    backgroundColor: Colors.green,
    marginLeft: DISPLAY_MARGIN,
  },
});
