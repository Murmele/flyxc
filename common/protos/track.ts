// @generated by protobuf-ts 2.8.1 with parameter long_type_number,force_optimize_code_size
// @generated from protobuf file "track.proto" (syntax proto3)
// tslint:disable
import { MessageType } from '@protobuf-ts/runtime';
/**
 * A single track.
 * Fixes are differential encoded.
 *
 * @generated from protobuf message Track
 */
export interface Track {
  /**
   * @generated from protobuf field: string pilot = 1;
   */
  pilot: string;
  /**
   * @generated from protobuf field: repeated sint32 lat = 2;
   */
  lat: number[];
  /**
   * @generated from protobuf field: repeated sint32 lon = 3;
   */
  lon: number[];
  /**
   * @generated from protobuf field: repeated sint32 alt = 4;
   */
  alt: number[];
  /**
   * Time in seconds.
   *
   * @generated from protobuf field: repeated uint32 timeSec = 5;
   */
  timeSec: number[];
}
/**
 * All the tracks for a single file.
 * Stored in the database.
 *
 * @generated from protobuf message TrackGroup
 */
export interface TrackGroup {
  /**
   * @generated from protobuf field: repeated Track tracks = 2;
   */
  tracks: Track[];
}
/**
 * Ground altitude for a single Track.
 *
 * @generated from protobuf message GroundAltitude
 */
export interface GroundAltitude {
  /**
   * @generated from protobuf field: repeated sint32 altitudes = 1;
   */
  altitudes: number[];
  /**
   * True when errors were encountered while retrieveing the altitudes.
   *
   * @generated from protobuf field: bool has_errors = 2;
   */
  hasErrors: boolean;
}
/**
 * Ground altitude for a Track group.
 * Stored in the database.
 *
 * @generated from protobuf message GroundAltitudeGroup
 */
export interface GroundAltitudeGroup {
  /**
   * @generated from protobuf field: repeated GroundAltitude ground_altitudes = 1;
   */
  groundAltitudes: GroundAltitude[];
}
/**
 * Airspaces along a track.
 *
 * @generated from protobuf message Airspaces
 */
export interface Airspaces {
  /**
   * Start and end in seconds.
   *
   * @generated from protobuf field: repeated sint32 start_sec = 1;
   */
  startSec: number[];
  /**
   * @generated from protobuf field: repeated sint32 end_sec = 2;
   */
  endSec: number[];
  /**
   * @generated from protobuf field: repeated string name = 3;
   */
  name: string[];
  /**
   * @generated from protobuf field: repeated string category = 4;
   */
  category: string[];
  /**
   * @generated from protobuf field: repeated sint32 top = 5;
   */
  top: number[];
  /**
   * @generated from protobuf field: repeated sint32 bottom = 6;
   */
  bottom: number[];
  /**
   * @generated from protobuf field: repeated uint32 flags = 7;
   */
  flags: number[];
  /**
   * @generated from protobuf field: repeated bool into = 9;
   */
  into: boolean[];
  /**
   * @generated from protobuf field: bool has_errors = 8;
   */
  hasErrors: boolean;
}
/**
 * @generated from protobuf message AirspacesGroup
 */
export interface AirspacesGroup {
  /**
   * @generated from protobuf field: repeated Airspaces airspaces = 1;
   */
  airspaces: Airspaces[];
}
/**
 * @generated from protobuf message MetaTrackGroup
 */
export interface MetaTrackGroup {
  /**
   * @generated from protobuf field: int64 id = 1;
   */
  id: number;
  /**
   * @generated from protobuf field: uint32 num_postprocess = 2;
   */
  numPostprocess: number;
  /**
   * @generated from protobuf field: optional bytes track_group_bin = 3;
   */
  trackGroupBin?: Uint8Array;
  /**
   * This field is only present when there are some altitude data.
   * The GroundAltitude can still have has_errors = true if not all the data
   * were retrieved correctly.
   *
   * @generated from protobuf field: optional bytes ground_altitude_group_bin = 4;
   */
  groundAltitudeGroupBin?: Uint8Array;
  /**
   * @generated from protobuf field: optional bytes airspaces_group_bin = 5;
   */
  airspacesGroupBin?: Uint8Array;
}
/**
 * @generated from protobuf message MetaTracks
 */
export interface MetaTracks {
  /**
   * @generated from protobuf field: repeated bytes meta_track_groups_bin = 1;
   */
  metaTrackGroupsBin: Uint8Array[];
}
/**
 * @generated from protobuf message Route
 */
export interface Route {
  /**
   * @generated from protobuf field: repeated float lat = 1;
   */
  lat: number[];
  /**
   * @generated from protobuf field: repeated float lon = 2;
   */
  lon: number[];
  /**
   * @generated from protobuf field: repeated float alt = 3;
   */
  alt: number[];
}
/**
 * @generated from protobuf message MetaTrackGroupsAndRoute
 */
export interface MetaTrackGroupsAndRoute {
  /**
   * @generated from protobuf field: repeated MetaTrackGroup meta_track_groups = 1;
   */
  metaTrackGroups: MetaTrackGroup[];
  /**
   * @generated from protobuf field: optional Route route = 2;
   */
  route?: Route;
}
// @generated message type with reflection information, may provide speed optimized methods
class Track$Type extends MessageType<Track> {
  constructor() {
    super('Track', [
      { no: 1, name: 'pilot', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: 'lat', kind: 'scalar', repeat: 1 /*RepeatType.PACKED*/, T: 17 /*ScalarType.SINT32*/ },
      { no: 3, name: 'lon', kind: 'scalar', repeat: 1 /*RepeatType.PACKED*/, T: 17 /*ScalarType.SINT32*/ },
      { no: 4, name: 'alt', kind: 'scalar', repeat: 1 /*RepeatType.PACKED*/, T: 17 /*ScalarType.SINT32*/ },
      { no: 5, name: 'timeSec', kind: 'scalar', repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
    ]);
  }
}
/**
 * @generated MessageType for protobuf message Track
 */
export const Track = new Track$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TrackGroup$Type extends MessageType<TrackGroup> {
  constructor() {
    super('TrackGroup', [{ no: 2, name: 'tracks', kind: 'message', repeat: 1 /*RepeatType.PACKED*/, T: () => Track }]);
  }
}
/**
 * @generated MessageType for protobuf message TrackGroup
 */
export const TrackGroup = new TrackGroup$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GroundAltitude$Type extends MessageType<GroundAltitude> {
  constructor() {
    super('GroundAltitude', [
      { no: 1, name: 'altitudes', kind: 'scalar', repeat: 1 /*RepeatType.PACKED*/, T: 17 /*ScalarType.SINT32*/ },
      { no: 2, name: 'has_errors', kind: 'scalar', T: 8 /*ScalarType.BOOL*/ },
    ]);
  }
}
/**
 * @generated MessageType for protobuf message GroundAltitude
 */
export const GroundAltitude = new GroundAltitude$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GroundAltitudeGroup$Type extends MessageType<GroundAltitudeGroup> {
  constructor() {
    super('GroundAltitudeGroup', [
      { no: 1, name: 'ground_altitudes', kind: 'message', repeat: 1 /*RepeatType.PACKED*/, T: () => GroundAltitude },
    ]);
  }
}
/**
 * @generated MessageType for protobuf message GroundAltitudeGroup
 */
export const GroundAltitudeGroup = new GroundAltitudeGroup$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Airspaces$Type extends MessageType<Airspaces> {
  constructor() {
    super('Airspaces', [
      { no: 1, name: 'start_sec', kind: 'scalar', repeat: 1 /*RepeatType.PACKED*/, T: 17 /*ScalarType.SINT32*/ },
      { no: 2, name: 'end_sec', kind: 'scalar', repeat: 1 /*RepeatType.PACKED*/, T: 17 /*ScalarType.SINT32*/ },
      { no: 3, name: 'name', kind: 'scalar', repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
      { no: 4, name: 'category', kind: 'scalar', repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
      { no: 5, name: 'top', kind: 'scalar', repeat: 1 /*RepeatType.PACKED*/, T: 17 /*ScalarType.SINT32*/ },
      { no: 6, name: 'bottom', kind: 'scalar', repeat: 1 /*RepeatType.PACKED*/, T: 17 /*ScalarType.SINT32*/ },
      { no: 7, name: 'flags', kind: 'scalar', repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
      { no: 9, name: 'into', kind: 'scalar', repeat: 1 /*RepeatType.PACKED*/, T: 8 /*ScalarType.BOOL*/ },
      { no: 8, name: 'has_errors', kind: 'scalar', T: 8 /*ScalarType.BOOL*/ },
    ]);
  }
}
/**
 * @generated MessageType for protobuf message Airspaces
 */
export const Airspaces = new Airspaces$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AirspacesGroup$Type extends MessageType<AirspacesGroup> {
  constructor() {
    super('AirspacesGroup', [
      { no: 1, name: 'airspaces', kind: 'message', repeat: 1 /*RepeatType.PACKED*/, T: () => Airspaces },
    ]);
  }
}
/**
 * @generated MessageType for protobuf message AirspacesGroup
 */
export const AirspacesGroup = new AirspacesGroup$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MetaTrackGroup$Type extends MessageType<MetaTrackGroup> {
  constructor() {
    super('MetaTrackGroup', [
      { no: 1, name: 'id', kind: 'scalar', T: 3 /*ScalarType.INT64*/, L: 2 /*LongType.NUMBER*/ },
      { no: 2, name: 'num_postprocess', kind: 'scalar', T: 13 /*ScalarType.UINT32*/ },
      { no: 3, name: 'track_group_bin', kind: 'scalar', opt: true, T: 12 /*ScalarType.BYTES*/ },
      { no: 4, name: 'ground_altitude_group_bin', kind: 'scalar', opt: true, T: 12 /*ScalarType.BYTES*/ },
      { no: 5, name: 'airspaces_group_bin', kind: 'scalar', opt: true, T: 12 /*ScalarType.BYTES*/ },
    ]);
  }
}
/**
 * @generated MessageType for protobuf message MetaTrackGroup
 */
export const MetaTrackGroup = new MetaTrackGroup$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MetaTracks$Type extends MessageType<MetaTracks> {
  constructor() {
    super('MetaTracks', [
      {
        no: 1,
        name: 'meta_track_groups_bin',
        kind: 'scalar',
        repeat: 2 /*RepeatType.UNPACKED*/,
        T: 12 /*ScalarType.BYTES*/,
      },
    ]);
  }
}
/**
 * @generated MessageType for protobuf message MetaTracks
 */
export const MetaTracks = new MetaTracks$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Route$Type extends MessageType<Route> {
  constructor() {
    super('Route', [
      { no: 1, name: 'lat', kind: 'scalar', repeat: 1 /*RepeatType.PACKED*/, T: 2 /*ScalarType.FLOAT*/ },
      { no: 2, name: 'lon', kind: 'scalar', repeat: 1 /*RepeatType.PACKED*/, T: 2 /*ScalarType.FLOAT*/ },
      { no: 3, name: 'alt', kind: 'scalar', repeat: 1 /*RepeatType.PACKED*/, T: 2 /*ScalarType.FLOAT*/ },
    ]);
  }
}
/**
 * @generated MessageType for protobuf message Route
 */
export const Route = new Route$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MetaTrackGroupsAndRoute$Type extends MessageType<MetaTrackGroupsAndRoute> {
  constructor() {
    super('MetaTrackGroupsAndRoute', [
      { no: 1, name: 'meta_track_groups', kind: 'message', repeat: 1 /*RepeatType.PACKED*/, T: () => MetaTrackGroup },
      { no: 2, name: 'route', kind: 'message', T: () => Route },
    ]);
  }
}
/**
 * @generated MessageType for protobuf message MetaTrackGroupsAndRoute
 */
export const MetaTrackGroupsAndRoute = new MetaTrackGroupsAndRoute$Type();
