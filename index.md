---
layout: default
title: Movies I like
---

# {{title}}

<!-- {{movies}} -->

<div class="items">

{% for movie in movies %}

<div class="item">

![{{ movie.title }}]({{ movie.poster }})

## {{ movie.title }}

</div>
{% endfor %}
</div>
