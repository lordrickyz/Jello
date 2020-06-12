// import React from 'react';


// class ListIndex extends React.Component {
//   constructor(props) {
//     super(props)
//     this.renderLists = this.renderLists.bind(this);
//     this.CreateListModal = this.CreateListModal.bind(this)
//   }

//   componentDidMount() {
//     this.props.fetchLists();
//     this.props.closeModal();
//   }

//   componentWillUnmount() {
//     this.props.closeModal();
//   }

//   CreateListModal() {
//     this.props.openModal("create-list")
//   }

//   renderLists() {  
//     const listItems = this.props.lists.map((list) => {
//       return (
//         <li className="list-index-items" key={`list-index-${list.id}`} >
//           <span>{list.title}</span>
//         </li>
//       );
//     });
//     if (listItems.length > 0) {
//       return (
//         <ul className="lists-items">
//           {listItems}
//           <li className="list-index-item" key="create-list-li" id="create-list-li" onClick={this.CreateListModal}>
//             <div><span>Add New List</span></div>
//           </li>
//         </ul>
//       );
//     } else {
//       return (
//         <ul className="lists-items">
//           <li className="list-index-item" key="create-list-li" id="create-list-li" onClick={this.CreateListModal}>
//             <div><span>Add New List</span></div>
//           </li>
//         </ul>
//       );
//     }
//   }



//   render() {
//     return (
//       <section className={"lists-index-container"}>
//         <ul className={"lists-index"}>
//           {this.renderLists()}
//         </ul>
//       </section>
//     )
//   }
// }

// export default ListIndex;