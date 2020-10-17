import React from 'react'
import { TextInput, View, Text } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup';
import FlatButton from '../components/Button'
import globalStyle from '../styles'

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test(
            'is-num-1-5', 
            'Rating must be a number 1 - 5', 
            (val)=>{ 
                return (parseInt(val) < 6) && (parseInt(val) > 0)
            })
    
})

export default function ReviewForm({onSubmit}){

    return (
        <View style={globalStyle.container}>
            <Formik
                validationSchema = {reviewSchema}
                initialValues = {{
                    title: "",
                    body: "",
                    rating: "",
                }}
                onSubmit = {onSubmit}
            >
                {
                   (formikProps) => (
                       <View>
                           <TextInput 
                                style={globalStyle.input}
                                placeholder = "Review title"
                                onChangeText = {formikProps.handleChange('title')}
                                value = {formikProps.values.title}
                           />
                           <Text style={globalStyle.errorText}>{ formikProps.touched.title && formikProps.errors.title}</Text>
                           <TextInput 
                                multiline
                                style={globalStyle.input}
                                placeholder = "Review body"
                                onChangeText = {formikProps.handleChange('body')}
                                value = {formikProps.values.body}
                           />
                           <Text style={globalStyle.errorText}>{formikProps.touched.body && formikProps.errors.body}</Text>
                           <TextInput 
                                style={globalStyle.input}
                                placeholder = "Rating 1-5"
                                onChangeText = {formikProps.handleChange('rating')}
                                value = {formikProps.values.rating}
                                keyboardType = "numeric"
                           />
                           <Text style={globalStyle.errorText}>{formikProps.touched.rating && formikProps.errors.rating}</Text>
                           <FlatButton text="Submit" onPress={formikProps.handleSubmit}/>
                       </View>
                   )
                }
            </Formik>
        </View>
    )
}