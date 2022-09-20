import React, {useState} from 'react';
import {Welcome} from "/imports/ui/components/Welcome";
import {Tags} from "/imports/ui/components/Tags";
import {Author} from "/imports/ui/components/Author";
import {Replies} from "/imports/api/replies";
import {toast} from 'react-toastify';

const author = {
    name: "3c4j.com",
    home: "https://3c4j.com?from=q.3c4j.com"
}

export const Content = () => {
    const [question, setQuestion] = useState(latest());

    return (
        <>
            <div className="h-screen w-full lg:h-full lg:w-1/2 flex justify-center items-center">
                <div className="max-w-xl px-12 lg:px-8">
                    <p className="font-sans text-xs text-gray-600 uppercase tracking-wide mb-4">
                        提问人 / Questioned: <Author author={question.author}/>
                    </p>

                    <div><Tags tags={question.tags}/></div>

                    <h5 className="md:text-2xl leading-normal mb-6">Q: {question.title}</h5>
                    <div className="leading-normal -mt-4 mb-2"> 最新回复 / Latest Reply: </div>

                    <div className="ml-2 -mr-8 px-2 border-2 border-dashed border-gray-200 shadow-md">
                        <p className="pr-6 md:pr-0 text-xs leading-normal md:leading-loose text-gray-900 mb-8">
                            {question.latestReply.content}
                        </p>
                        <span className="text-xs text-gray-400">
                            <Author
                                author={question.latestReply.author}/> @ {question.latestReply.createdAt.toLocaleString()}
                        </span>
                    </div>
                    <div className="ml-0 mt-3">
                        <a className="text-xs text-black uppercase hover:cursor-pointer" onClick={() => {
                            toast("功能开发中.../ Coming soon...", {position: "top-center", toastId: "customId"})
                        }}>
                            更多 / more
                            <span className="inline-block h-1 w-24 ml-4 border-t border-gray-light"></span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="h-screen w-full lg:h-full lg:w-1/2 relative">
                <div className="w-full h-full bg-cover bg-no-repeat bg-center">
                    <Welcome/>
                </div>
            </div>
            <div className="relative pin-l pin-b py-6 px-4 bg-white flex justify-around w-44 hover:cursor-pointer">
                <a
                    className="text-xs text-gray-600er hover:text-gray-900 no-underline"
                    title="前一天 / the previous day"
                    onClick={() => {
                        setQuestion(thePreviousDay(question))
                    }}
                >&larr;</a>
                <span className="text-xs text-gray-600er" title="当天 / now" onClick={() => {
                    setQuestion(latest())
                }}>{question.date}</span>
                <a
                    className={"text-xs text-gray-600er hover:text-gray-900 no-underline " + (isToday(question.createdAt) ? "hidden" : "")}
                    title="后一天 / the next day"
                    onClick={() => {
                        setQuestion(theNextDay(question))
                    }}
                >&rarr;</a>
            </div>
        </>
    )
}

function isToday(d) {
    return (new Date()).toDateString() === d.toDateString();
}

function thePreviousDay(q) {
    const previousDay = new Date(q.createdAt.toString())
    previousDay.setDate(previousDay.getDate() - 1);
    const end = new Date()
    end.setDate(end.getDate() - 7)
    if (previousDay.toDateString() === end.toDateString()) {
        toast("不提供查看一周之前的内容 / Can't view content older than a week")
        return q
    }
    return mkQuestion(previousDay)
}

function theNextDay(q) {
    const nextDay = q.createdAt
    nextDay.setDate(nextDay.getDate() + 1);
    return mkQuestion(nextDay)
}

function latest() {
    return mkQuestion(new Date())
}

function mkQuestion(d) {
    const reply = Replies[Math.floor(Math.random() * Replies.length)]
    return {
        title: `${d.getFullYear()} 年 ${d.getMonth()+1} 月 ${d.getDate()} 日, 今天你 emo 了吗? `,
        latestReply: {
            author: author,
            content: reply,
            createdAt: new Date(),
        },
        author: author,
        createdAt: d,
        tags: [
            {_id: "emo", name: "emo", color: "bg-green-600", createdAt: new Date()},
        ],
        date: d.toDateString()
    }
}
