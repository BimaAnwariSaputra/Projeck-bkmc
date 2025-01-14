import React, { useState } from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

function ExampleSkeleton(props) {
	const size = props.size;
	const color = props.color;
	const chars = props.chars;
	const lines = props.lines;
	const width = props.width;
	
	return (
		<div
			className="example-skeleton"
			style={{
				"--size": size,
				"--color": color,
				"--chars": chars,
				"--lines": lines,
				"width": width,
			}}></div>
	);
}

function ExampleIcon(props) {
	const size = props.size;
	const color = props.color;
	
	return (
		<i
			className="example-icon"
			style={{
				"--size": size,
				"--color": color,
			}}></i>
	);
}

function ExampleTopBarLink() {
	return (
		<a href="#" className="example-top-bar-link" onClick={() => false}>
			<ExampleIcon size="24px" color="#f2f2f2" />
		</a>
	);
}

function ExampleTopBar(props) {
	const hamburgerClick = props.hamburgerClick;
	const hamburgerActive = props.hamburgerActive;
	
	let hamburgerClassName = "example-hamburger-menu";
	
	if (hamburgerActive) {
		hamburgerClassName += " example-hamburger-menu-active";
	}
	
	return (
		<nav className="example-top-bar">
			<button
				className={hamburgerClassName}
				onClick={hamburgerClick}>
				<span></span>
				<span></span>
				<span></span>
			</button>
			<div className="example-search-box">
				<input type="search" className="example-search-input" />
				<button type="button" className="example-search-button">
					<span className="example-search-button-icon"></span>
				</button>
			</div>
			<div className="example-top-bar-left-links">
				<ExampleTopBarLink />
				<ExampleTopBarLink />
			</div>
			<div className="example-top-bar-right-links">
				<ExampleTopBarLink />
				<ExampleTopBarLink />
				<ExampleTopBarLink />
				<ExampleTopBarLink />
			</div>
		</nav>
	);
}

function ExampleSideBarLink(props) {
	const chars = props.chars;
	
	return (
		<li>
			<a href="#" className="example-side-bar-link" onClick={() => false}>
				<span className="example-side-bar-link-icon">
					<ExampleIcon size="16px" color="#f2f2f2" />
				</span>
				<ExampleSkeleton color="#f2f2f2" chars={chars} lines="1" />
			</a>
		</li>
	);
}

function ExampleSideBar(props) {
	const expanded = props.expanded;
	
	let sideBarClassName = "example-side-bar";
	
	if (expanded) {
		sideBarClassName += " example-side-bar-expanded";
	}
	
	return (
		<aside className={sideBarClassName}>
			<div className="example-side-bar-title">
				<div className="example-side-bar-title-icon">
					<ExampleIcon size="32px" color="#cfcfcf" />
				</div>
				<div className="example-side-bar-title-text">
					<ExampleSkeleton size="1.5rem" color="#cfcfcf" chars="5" lines="1" />
				</div>
			</div>
			<ul className="example-side-bar-list">
				<ExampleSideBarLink chars="4" />
				<ExampleSideBarLink chars="9" />
				<ExampleSideBarLink chars="7" />
				<ExampleSideBarLink chars="8" />
				<ExampleSideBarLink chars="8" />
				<ExampleSideBarLink chars="5" />
				<ExampleSideBarLink chars="8" />
				<ExampleSideBarLink chars="9" />
				<ExampleSideBarLink chars="8" />
				<ExampleSideBarLink chars="4" />
			</ul>
		</aside>
	);
}

function ExampleOffCanvas() {
	const [expandOffcanvas, setExpandOffcanvas] = useState(false);
	
	return (
		<div className="example-offcanvas-container">
			<ExampleSideBar expanded={expandOffcanvas} />
			<div className="example-offcanvas-screen">
				<ExampleTopBar
					hamburgerActive={expandOffcanvas}
					hamburgerClick={() => {
						setExpandOffcanvas(!expandOffcanvas);
					}}
				/>
				<ExampleContent />
			</div>
		</div>
	);
}

function ExampleBreadcumbLink(props) {
	const chars = props.chars;
	
	return (
		<li>
			<a href="#" className="example-breadcrumb-link" onClick={() => false}>
				<ExampleSkeleton size="24px" color="#e2e2e2" chars={chars} lines="1" />
			</a>
		</li>
	);
}

function ExamplePanelContent(props) {
	const titleChars = props.titleChars;
	const lines = props.lines
	
	return [(
		<ExampleSkeleton color="#e2e2e2" chars={titleChars} lines="1" />
	), (
		<ExampleSkeleton color="#e2e2e2" width="100%" lines={lines} />
	)];
}

function ExampleCardListItem(props) {
	const titleChars = props.titleChars;
	const lines = props.lines
	
	return (
		<div className="example-card-list-item">
			<ExampleSkeleton color="#e2e2e2" chars={titleChars} lines="1" />
			<ExampleSkeleton color="#e2e2e2" width="100%" lines={lines} />
		</div>
	);
}

function ExampleCenterPanelContent() {
	return (
		<div className="example-card-list-items">
			<ExampleCardListItem titleChars="10" chars="20" lines="5" />
			<ExampleCardListItem titleChars="10" chars="20" lines="5" />
			<ExampleCardListItem titleChars="10" chars="20" lines="5" />
			<ExampleCardListItem titleChars="10" chars="20" lines="5" />
			<ExampleCardListItem titleChars="10" chars="20" lines="5" />
			<ExampleCardListItem titleChars="10" chars="20" lines="5" />
			<ExampleCardListItem titleChars="10" chars="20" lines="5" />
		</div>
	);
}

function ExampleContent() {
	return (
		<div className="example-offcanvas-content">
			<ul className="example-breadcrumbs">
				<ExampleBreadcumbLink chars="4" />
				<ExampleBreadcumbLink chars="2" />
				<ExampleBreadcumbLink chars="3" />
			</ul>
			<div className="example-dashboard">
				<div className="example-left-panel">
					<div className="example-card">
						<ExamplePanelContent titleChars="4" lines="5" />
						<ExamplePanelContent titleChars="4" lines="5" />
						<ExamplePanelContent titleChars="4" lines="5" />
					</div>
					<div className="example-card">
						<ExamplePanelContent titleChars="4" lines="5" />
						<ExamplePanelContent titleChars="4" lines="5" />
					</div>
				</div>
				<div className="example-center-panel">
					<div className="example-card example-card-list">
						<ExampleCenterPanelContent />
					</div>
				</div>
				<div className="example-right-panel">
					<div className="example-card">
						<ExamplePanelContent titleChars="4" lines="5" />
						<ExamplePanelContent titleChars="4" lines="5" />
						<ExamplePanelContent titleChars="4" lines="5" />
						<ExamplePanelContent titleChars="4" lines="5" />
						<ExamplePanelContent titleChars="4" lines="5" />
						<ExamplePanelContent titleChars="4" lines="5" />
					</div>
				</div>
			</div>
		</div>
	);
}

function App() {
	return <ExampleOffCanvas />;
}

ReactDOM.render(<App />, document.getElementById("app"));
