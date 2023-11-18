import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    input: {
        open: false,
        cnic: '',
    },
    review: {
        open: false,
        name: '',
        phone: '',
        email: '',
        time: '',
    },
}

const opdAppointmentSlice = createSlice({
    name: 'OPD_APPOINTMENT',
    initialState,
    reducers: {
        openInputModal(state) {
            state.input.open = true
        },
        closeInputModal(state) {
            state.input.open = false
        },
        setCNIC(state, action) {
            state.input.cnic = action.payload
        },
        openReviewModal(state) {
            state.review.open = true
        },
        closeReviewModal(state) {
            state.review.open = false
        },
        setUserDetail(state, action) {
            state.review.name = action.payload.name
            state.review.phone = action.payload.phone
            state.review.email = action.payload.email
        }, 
        setTime(state, action) {
            state.review.time = action.payload
        },
    },
})

export const { 
    openInputModal, 
    closeInputModal, 
    setCNIC, 
    openReviewModal, 
    closeReviewModal, 
    setUserDetail,
    setTime
} = opdAppointmentSlice.actions

export default opdAppointmentSlice.reducer