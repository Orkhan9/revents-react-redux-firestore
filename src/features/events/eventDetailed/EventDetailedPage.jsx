import React from 'react';
import {Grid, GridColumn} from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSideBar from "./EventDetailedSideBar";

const EventDetailedPage = () => {
    return (
        <Grid>
            <GridColumn width={10}>
                <EventDetailedHeader />
                <EventDetailedInfo />
                <EventDetailedChat />
            </GridColumn>
            <GridColumn width={6}>
                <EventDetailedSideBar />
            </GridColumn>
        </Grid>
    );
};

export default EventDetailedPage;