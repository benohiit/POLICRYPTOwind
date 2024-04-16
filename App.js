import { SafeAreaView, StyleSheet, Text, View, } from 'react-native';
import React from 'react';
import Header from './src/components/general/Header';
import Main from './src/screens/Main';
import Footer from './src/components/general/Footer';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Main />
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    },
});

export default App;
