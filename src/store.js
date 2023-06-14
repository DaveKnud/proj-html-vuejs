import { reactive } from 'vue';

export const store = reactive({
    links: [
        {
            link: "HOME"
        },
        {
            link: "PRICES"
        },
        {
            link: "COURSES"
        },
        {
            link: "LOCATION"
        },
        {
            link: "BLOG"
        }
    ],

    linksContactDetails: [
        {
            link: "12345 North Main Street,New York, NY 555555"
        },

        {
            link: "1.800.555.6789"
        },

        {
            link: "info@your-domain.com"
        },

        {
            link: "Theme-Fusion.com"
        },
    ],


    linksCoursesFooter: [
        {
            link: "Pass Plus"
        },

        {
            link: "Intensive Course"
        },

        {
            link: "Automatic"
        },

        {
            link: "Instructor Training"
        },
    ]

})