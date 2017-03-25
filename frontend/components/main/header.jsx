import React, { Component } from 'react';


export default class Header extends Component {
	links() {
		let links = [{ name:"Github", link:'https://github.com/ChaniceStl' },
  					 { name:"LinkedIn", link:"https://www.linkedin.com/in/chanice-stlouis/" }, 
  				     { name:"Twitter", link:"https://twitter.com/chanicestlouis" }]
		return (
			<div>
				{links.map((val,key) => {
	  				return (
	  				 <a key={key} href={val.link}>{val.name} <br/></a>
	  				 )
	  			})}
			</div>
			)


		
	}
  render() {
  	console.log(this.props)
  	return (
  		<div>
  			<h1 onClick={() => this.props.router.push('/')}> Chanice ST. Louis</h1>
  			{this.links()}
  			{this.props.children}
  		</div>
  	)
  }
}