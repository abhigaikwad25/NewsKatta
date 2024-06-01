import React, { Component } from 'react'
import Newsitem from './newsItem';
import Spinner from './spinner';
import PropTypes from 'prop-types'


export default class news extends Component {
    static defaultProps={
        pageSize: 5,
        country: "in",
        category: "general"
    }

    static propTypes={
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string
    }

    constructor() {
        super();
        // console.log("its a constructor");
        this.state = {
            articles: [],
            //its a default page no.
            loading: false,
            page: 1
        }

    }



    async componentDidMount() {

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pageSize}`;
        //fetching data from API
        this.setState({loading:true})
        let data = await fetch(url);
        //append data in json file 
        let parseData = await data.json();
        console.log(parseData);
        //when you are starting app showing loading before parseData not genereted
        
        //articles state change with fetchdata by using setState
        this.setState({ 
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            //when data is loaded then loading is hide after parseData not genereted
            loading: false
            
        })
    }

    handlePrevise = async () => {
        //fetching data from API
        this.setState({loading:true})
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        console.log()
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            loading: false
        })
    }

    handleNext = async () => {

        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults /10))) {
            this.setState({loading:true});
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parseData = await data.json();
            console.log(parseData);
            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles,
                loading: false
            })
        }


    }

    render() {
        return (
            <div className='container my-3'>

                {this.state.loading && <Spinner />}
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage ? element.urlToImage : "https://www.financialexpress.com/wp-content/uploads/2023/07/Breaking-2.jpg?w=1024"} newsUrl={element.url} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between my-5">
                    <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevise} className="btn btn-dark">&larr; Previse</button>
                    <button type="button" className="btn btn-dark">{this.state.page}</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" onClick={this.handleNext} className="btn btn-dark">Next &rarr;</button>
                </div>
            </div>
        )
    }
}






