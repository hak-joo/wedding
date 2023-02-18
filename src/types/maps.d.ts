declare namespace naver.maps {
    class LatLng {
        constructor(lat: number, lng: number);
        x: number;
        y: number;
        lat(): number;
        lng(): number;
        equals(latlng: LatLng): boolean;
        toString(): string;
    }

    class Marker {
        constructor(options?: MarkerOptions);
        getOptions(key?: string): any;
        setOptions(newOptions: MarkerOptions): void;
        setPosition(position: LatLng | Coord): void;
        getPosition(): LatLng;
    }

    interface MarkerOptions {
        position?: LatLng | Coord;
        map?: Map;
        title?: string;
        icon?: string | Icon | Symbol;
        shape?: MarkerShape;
        cursor?: string;
        clickable?: boolean;
        zIndex?: number;
        opacity?: number;
        draggable?: boolean;
        visible?: boolean;
        flat?: boolean;
        rotation?: number;
        minZoom?: number;
        maxZoom?: number;
        clickableStrategy?: string;
        disableHitTest?: boolean;
        animation?: Animation;
    }

    interface Coord {
        x: number;
        y: number;
    }

    class Map {
        constructor(mapDiv: HTMLElement | string, options?: MapOptions);
        getCenter(): LatLng;
        setCenter(latlng: LatLng | Coord): void;
        getZoom(): number;
        setZoom(zoom: number): void;
        setOptions(options: MapOptions): void;
        addOverlay(overlay: Marker | Polygon | Polyline | Circle | Rectangle): void;
        removeOverlay(overlay: Marker | Polygon | Polyline | Circle | Rectangle): void;
    }

    interface MapOptions {
        center?: LatLng | Coord;
        zoom?: number;
        mapTypeId?: string;
        size?: Size | string;
        draggable?: boolean;
        scrollWheel?: boolean;
        keyboardShortcuts?: boolean;
        disableDoubleClickZoom?: boolean;
        disableDoubleTapZoom?: boolean;
        disableKineticPan?: boolean;
        disableTwoFingerTapZoom?: boolean;
        zoomControl?: boolean;
        zoomControlOptions?: ZoomControlOptions;
        mapDataControl?: boolean;
        mapDataControlOptions?: MapDataControlOptions;
        scaleControl?: boolean;
        scaleControlOptions?: ScaleControlOptions;
        logoControl?: boolean;
        logoControlOptions?: LogoControlOptions;
        mapTypeControl?: boolean;
        mapTypeControlOptions?: MapTypeControlOptions;
        overviewMapControl?: boolean;
        overviewMapControlOptions?: OverviewMapControlOptions;
        maxBounds?: LatLngBounds;
        disableHD?: boolean;
    }

    interface Size {
        width: number;
        height: number;
    }

    interface ZoomControlOptions {
        position?: Position;
        style?: ZoomControlStyle;
        size?: Size;
    }

    interface MapDataControlOptions {
        position?: Position;
        style?: MapDataControlStyle;
        mapTypeBtn?: boolean;
        panoBtn?: boolean;
    }

    interface ScaleControlOptions {
        position?: Position;
        style?: ScaleControlStyle;
    }

    interface LogoControlOptions {
        position?: Position;
        style?: LogoControlStyle;
    }

    interface MapTypeControlOptions {
        position?: Position;
        style?: MapTypeControlStyle;
        mapTypes?: Array<any>;
    }

    interface OverviewMapControlOptions {
        opened?: boolean;
    }

    interface MarkerShape {
        coords: Array<number>;
        type: string;
    }

    class Polygon {
        constructor(options: PolygonOptions);
    }
}  