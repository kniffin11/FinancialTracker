import React from "react";

export const Connection = ({data}) => {
    return(
        <div>
            <h1>{data.connection}</h1>
            <h1>{data.technologies}</h1>
            <p>Some of my hardrives files were wiped, including my SneakerStore project, so I am posting this to github while I work on recreating the sneakerstore app, this is just to show the application of Dockerfiles and a docker-compose file.</p>
        </div>
    );
};