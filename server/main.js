import {Meteor} from 'meteor/meteor';
import {Questions} from "/imports/api/questions";
import {Tags} from "/imports/api/tags";
import {Authors} from "/imports/api/authors";

Meteor.startup(() => {
    if (Authors.find().count() === 0) {
        Authors.insert({
            name: "3c4j.com",
            home: "https://3c4j.com",
            createdAt: new Date()
        })
    }

    if (Tags.find().count() === 0) {
        [
            {name: "Tag-1", color: "bg-green-600"},
            {name: "Tag-2", color: "bg-red-600"},
            {name: "Tag-3", color: "bg-yellow-600"},
            {name: "Tag-4", color: "bg-blue-600"},
            {name: "Tag-5", color: "bg-purple-600"},
        ].forEach(AddTag)
    }

    if (Questions.find().count() === 0) {
        const author = Authors.findOne({name: "3c4j.com"})
        const tags = Tags.find({}, {sort: {createdAt: -1}}).fetch()
        const _tags = []
        tags.forEach((_t) => {
            _tags.push(_t._id)
        })
        AddQuestion({
            title: 'What can i do in this website?',
            author: author._id,
            tags: _tags
        });
    }
});


function AddTag({name, color}) {
    Tags.insert({name, color, createdAt: new Date()})
}

function AddQuestion({title, author, tags}) {
    Questions.insert({title, author, tags, createdAt: new Date()});
}
