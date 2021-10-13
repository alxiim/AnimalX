<?php

namespace App\Http\Traits;

trait ApiResponse
{
    protected function apiResponse($status, $data, $message, $code)
    {
        return response()->json([
            'status' => $status,
            'message' => $message,
            'data' => $data
        ], $code);
    }

    /** 3 standard responses (JSend): succes, fail, error */

    public function respondSucces($data, $message, $code)
    {
        return $this->apiResponse('succes', $data, $message, $code);
    }

    public function respondFail($data, $message, $code)
    {
        return $this->apiResponse('fail', $data, $message, $code);
    }

    public function respondError($data, $message, $code)
    {
        return $this->apiResponse('error', $data, $message, $code);
    }

    /** Succes responses */

    public function respondOK($data, $message = null)
    {
        return $this->respondSucces($data, $message, 200);
    }

    public function respondCreated($data, $message = null)
    {
        return $this->respondSucces($data, $message, 201);
    }

    public function respondNoContent($data, $message = null)
    {
        return $this->respondSucces($data, $message, 204);
    }

    /** Fail responses */

    public function respondBadRequest(
        $message = 'The server did not understand the request.',
        $data = null
    ) {
        return $this->respondFail($data, $message, 400);
    }

    public function respondUnauthorized(
        $message = 'The requested data needs authentication.',
        $data = null
    ) {
        return $this->respondFail($data, $message, 401);
    }

    public function respondForbidden(
        $message = 'Access is forbidden to the requested data.',
        $data = null
    ) {
        return $this->respondFail($data, $message, 403);
    }

    public function respondNotFound(
        $message = 'The server can not find the requested data.',
        $data = null
    ) {
        return $this->respondFail($data, $message, 404);
    }

    public function respondMethodNotAllowed(
        $message = 'The method specified in the request is not allowed.',
        $data = null
    ) {
        return $this->respondFail($data, $message, 405);
    }

    public function respondNotAcceptable(
        $message = 'The server can only generate a response that is not accepted by the client.',
        $data = null
    ) {
        return $this->respondFail($data, $message, 406);
    }

    public function respondUnprocessableEntity(
        $message = 'The given data was invalid.',
        $data = null
    ) {
        return $this->respondFail($data, $message, 422);
    }

    /** Error responses */

    public function respondInternalServerError(
        $message = 'The server met an unexpected condition.',
        $data = null
    ) {
        return $this->respondError($data, $message, 500);
    }
}
