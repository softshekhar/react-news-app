import React from 'react';
import './TopicBasedNews.css';
import NewsCard from '../NewsCard/NewsCard';
import config from "../config";

class TopicBasedNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: "",
            news: [],
            isDataLoading: false
        }
    }

    static getDerivedStateFromProps(props, state) {
        const params = props.match.params;
        return {
            topic: params["name"]
        };
    }

    componentDidMount() {
        this.fetchTopicNews();
    }

    componentDidUpdate(prevProps) {
        if (this.state.topic !== prevProps.match.params["name"]) {
            this.fetchTopicNews();
        }
    }

    fetchTopicNews() {
        this.setState({
            isDataLoading: true
        });
        const newsApiUrl = `${config.newsApiUrlRoot}/${this.state.topic}.json?api-key=${config.newsApiKey}`;
        const newsPromise = fetch(newsApiUrl);
        newsPromise.then(response => {
            const bodyPromise = response.json();
            bodyPromise.then(data => {
                this.setState({
                    news: data["results"],
                    isDataLoading: false
                });
            });
        });
    }

    render() {
        return (
            <div className="topic-stories">
                <h3 style={{textTransform: "capitalize"}}>{this.state.topic}</h3>
                {
                    this.state.isDataLoading ?
                        (<div>News is loading....</div>) :
                        this.state.news.map((item) => {
                            return <NewsCard key={item["url"]} data={item}/>
                        })
                }
            </div>
        );
    }
}

export default TopicBasedNews;