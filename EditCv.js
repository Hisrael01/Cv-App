import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const EditCv = ({ onSave, onCancel, initialCVData }) => {
    const [editedData, setEditedData] = useState(initialCVData);
    const navigation = useNavigation();
    const route = useRoute();
    const cvData = route.params.cvData;

    const handleSave = () => {
        onSave(editedData);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Full Name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                value={editedData.fullName}
                onChangeText={(text) => setEditedData({ ...editedData, fullName: text })}
            />

            <Text style={styles.title}>Slack Username:</Text>
            <TextInput
                style={styles.input}
                placeholder="Slack Username"
                value={editedData.slackUsername}
                onChangeText={(text) => setEditedData({ ...editedData, slackUsername: text })}
            />

            <Text style={styles.title}>GitHub Handle:</Text>
            <TextInput
                style={styles.input}
                placeholder="GitHub Handle"
                value={editedData.githubHandle}
                onChangeText={(text) => setEditedData({ ...editedData, githubHandle: text })}
            />

            <Text style={styles.title}>Bio:</Text>
            <TextInput
                style={styles.input}
                placeholder="Bio"
                multiline
                value={editedData.bio}
                onChangeText={(text) => setEditedData({ ...editedData, bio: text })}
            />

            <Button title="Save" onPress={handleSave} />
            <Button style={styles.CancelBtn} title="Cancel" onPress={onCancel} />
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
    input: {
        fontSize: 16,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 8,
    },
    CancelBtn: {
        marginBottom: -255,
        marginTop: -100,
    },
});

export default EditCv;


