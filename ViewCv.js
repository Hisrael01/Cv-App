import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ViewCv = ({ cvData, onEdit }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Full Name:</Text>
            <Text style={styles.text}>{cvData.fullName}</Text>

            <Text style={styles.title}>Slack Username:</Text>
            <Text style={styles.text}>{cvData.slackUsername}</Text>

            <Text style={styles.title}>GitHub Handle:</Text>
            <Text style={styles.text}>{cvData.githubHandle}</Text>

            <Text style={styles.title}>Bio:</Text>
            <Text style={styles.text}>{cvData.bio}</Text>
            <Button title="Edit" onPress={onEdit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text: {
        fontSize: 16,
        marginBottom: 15,
    },
});

export default ViewCv;
