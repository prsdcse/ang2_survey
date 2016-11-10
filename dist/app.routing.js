"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var personal_info_component_1 = require('./personal-info/personal-info.component');
var subject_component_1 = require('./subject/subject.component');
var feedback_component_1 = require('./feedback/feedback.component');
var not_found_component_1 = require('./not-found/not-found.component');
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'personal-info',
        component: personal_info_component_1.PersonalInfoComponent
    },
    {
        path: 'subjects',
        component: subject_component_1.SubjectComponent
    },
    {
        path: 'feedback',
        component: feedback_component_1.FeedbackComponent
    },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map