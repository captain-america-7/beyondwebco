declare module 'ogl' {
  export class Renderer {
    constructor(options?: {
      canvas?: HTMLCanvasElement;
      width?: number;
      height?: number;
      dpr?: number;
      alpha?: boolean;
      depth?: boolean;
      stencil?: boolean;
      antialias?: boolean;
      premultipliedAlpha?: boolean;
      preserveDrawingBuffer?: boolean;
      powerPreference?: string;
      autoClear?: boolean;
      webgl?: number;
    });
    gl: WebGLRenderingContext & { canvas: HTMLCanvasElement };
    setSize(width: number, height: number): void;
    render(options: { scene: Mesh; camera?: any }): void;
  }

  export class Program {
    constructor(
      gl: WebGLRenderingContext,
      options: {
        vertex: string;
        fragment: string;
        uniforms?: Record<string, { value: any }>;
        transparent?: boolean;
        cullFace?: any;
        frontFace?: any;
        depthTest?: boolean;
        depthWrite?: boolean;
        depthFunc?: any;
      }
    );
    uniforms: Record<string, { value: any }>;
  }

  export class Mesh {
    constructor(
      gl: WebGLRenderingContext,
      options: {
        geometry: Triangle | any;
        program: Program;
      }
    );
  }

  export class Triangle {
    constructor(gl: WebGLRenderingContext);
    attributes: Record<string, any>;
  }

  export class Color {
    constructor(color?: string | number | [number, number, number]);
    r: number;
    g: number;
    b: number;
    set(color: string | number | [number, number, number] | Color): this;
  }
}
