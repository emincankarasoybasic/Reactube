import React from "react";

class SearchBar extends React.Component {
    state = { term: '' };

    inputOnChange = (event) => {
        this.setState({ term: event.target.value });
    }

    formOnSubmit = (event) => {
        event.preventDefault();
        this.props.formOnSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.formOnSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.inputOnChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;