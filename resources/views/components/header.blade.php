<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="theme-color" content="#ef34ad">
    <title>{{ $title ?? 'HRMS' }}</title>
    <link rel="manifest" href="{{ asset('manifest.webmanifest') }}" >
    <link rel="preload" href="{{ asset('css/bootstrap.css') }}" as="style" onload="this.rel='stylesheet'">
    <link rel="stylesheet" href="{{ asset('css/bootstrap.css') }}" media="print" onload="this.media='all'">
    <noscript><link rel="stylesheet" href="{{ asset('css/bootstrap.css') }}"></noscript>
    @vite(["resources/js/swreg.js"])
</head>
<body>
    @include('components.nav')
