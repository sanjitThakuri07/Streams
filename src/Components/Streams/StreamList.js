import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { Card, Container, Row, ListGroup } from "react-bootstrap";

import { fetchStreams } from "../../store/streams/actions";

import { BsCameraReelsFill } from "react-icons/bs";

const renderAdminButtons = (userId, streamId) => {
  if (userId === streamId) {
    return (
      <div className="p-3">
        <button className="btn btn-primary mx-2" type="submit">
          Edit
        </button>
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    );
  }
};

const CardComponent = ({ userId, stream }) => {
  return (
    <Card style={{ width: "18rem", margin: "0 24px 24px" }}>
      <ListGroup variant="flush">
        <ListGroup.Item className="d-flex align-items-center">
          <BsCameraReelsFill
            style={{ marginRight: ".5rem" }}
          ></BsCameraReelsFill>
          {stream.title}
        </ListGroup.Item>
        <ListGroup.Item>{stream.description}</ListGroup.Item>
        {renderAdminButtons(userId, stream.userId)}
      </ListGroup>
    </Card>
  );
};

const StreamList = ({ fetchStreams, streams, currentUserId, isSignedIn }) => {
  useEffect(() => {
    fetchStreams();
  }, []);

  console.log(isSignedIn);

  return (
    <>
      <Container className="mt-5">
        <h5 className="text-start">Streams</h5>
        <Row>
          {streams &&
            streams.map((stream) => (
              <CardComponent
                key={stream.id}
                stream={stream}
                userId={currentUserId}
              ></CardComponent>
            ))}
        </Row>
      </Container>
      {isSignedIn && (
        <Container className="d-flex justify-content-start">
          <Link to="/streams/new" className="btn btn-outline-primary">
            Create Stream
          </Link>
        </Container>
      )}
    </>
  );
};

// const mapStateToProps = ({ streams: { streams } }) => ({
//   streams,
// });

// when directly converting into objects from the response
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
